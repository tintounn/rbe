<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');

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

$app->get('/', \Controllers\HomeController::class . ':home');

$app->get('/piece-types', \Controllers\PieceTypeController::class . ':findAll');
$app->get('/piece-types/{id}', \Controllers\PieceTypeController::class . ':find');

$app->get('/piece-types/{pieceId}/pieces', \Controllers\PieceController::class . ':findAll');
$app->get('/piece-types/{pieceId}/pieces/{id}', \Controllers\PieceController::class . ':find');
$app->post('/piece-types/{pieceId}/pieces', \Controllers\PieceController::class . ':create');
$app->put('/piece-types/{pieceId}/pieces/{id}', \Controllers\PieceController::class . ':update');
$app->delete('/piece-types/{pieceId}/pieces/{id}', \Controllers\PieceController::class . ':delete');

$container['db'] = function($container) use ($capsule) {
  return $capsule;
};

try {
    $app->run();
} catch (Exception $e) {
}

?>
