<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../vendor/autoload.php';
require_once './Autoloader.php';

\App\Autoloader::register();

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
//$capsule->bootEloquent();

$app->get('/', function ($request, $response, $args) {
    return $response->getBody()->write("Hello world");
});

$app->get('/hello/{name}', function ($request, $response, $args) {
    return $response->getBody()->write("Hello, " . $args['name']);
});


$container['db'] = function($container) use ($capsule) {
  return $capsule;
};

$container['HomeController'] = function ($c) {
    return new \App\Controllers\HomeController($c);
};

try {
    $app->run();
} catch (Exception $e) {
}

?>
