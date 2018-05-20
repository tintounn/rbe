<?php

use Slim\Http\UploadedFile;

session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS, POST');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type,Accept');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$loader = require '../vendor/autoload.php';
$loader->addPsr4('Models\\', __DIR__ . '/models');
$loader->addPsr4('Controllers\\', __DIR__ . '/controllers');
$loader->addPsr4('Services\\', __DIR__ . '/services');

$app = new Slim\App([
    'settings' => [
        'displayErrorDetails' => true,
        'db' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'rbe',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
        ]
    ]
]);

$container = $app->getContainer();
$capsule = new Illuminate\Database\Capsule\Manager();
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

function moveUploadedFile($directory, UploadedFile $uploadedFile)
{
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);

    return $filename;
}

$app->post('/login', \Controllers\HomeController::class . ':login');

$app->get('/pieces', \Controllers\PieceController::class . ':findAll');
$app->get('/pieces/{id}', \Controllers\PieceController::class . ':find');
$app->post('/pieces', \Controllers\PieceController::class . ':create');
$app->put('/pieces/{id}', \Controllers\PieceController::class . ':update');
$app->delete('/pieces/{id}', \Controllers\PieceController::class . ':delete');

$container['db'] = function($container) use ($capsule) {
  return $capsule;
};

try {
    $app->run();
} catch (Exception $e) {
}

?>
