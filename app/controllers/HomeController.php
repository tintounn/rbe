<?php

namespace Controllers;

class HomeController {
    public function login($request, $response, $args) {
        $body = $request->getParsedBody();
        if($body['code'] == 'admin') {
            $_SESSION['connected'] = true;
            return $response->withJson(['connected' => true], 200);  
        } else {
            return $response->withJson(['connected' => false], 403);
        }
    }

    public function isConnected($request, $response, $args) {
        $connected = empty($_SESSION['connected']);

        if($connected) {
            return $response->withJson(['connected' => $connected], 200);
        } else {
            return $response->withJson(['connected' => $connected], 403);
        }
        
    }
}