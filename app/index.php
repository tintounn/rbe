<?php

require '../vendor/autoload.php';

$app = new Slim\App();

$app->get('/', function ($request, $response, $args) {
    return $response->getBody()->write("Hello world");
});

$app->get('/hello/{name}', function ($request, $response, $args) {
    return $response->getBody()->write("Hello, " . $args['name']);
});

require_once './Autoloader.php';
\App\Autoloader::register();

$container = $app->getContainer();
$container['HomeController'] = function($c) {
    return new \App\Controllers\HomeController();
};

try {
    $app->run();
} catch (Exception $e) {
}

?>
