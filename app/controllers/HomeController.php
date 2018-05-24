<?php

namespace Controllers;

use Services\JwtService;

class HomeController {
    public function login($request, $response, $args) {
        $body = $request->getParsedBody();
        if($body['code'] == 'admin') {
            $jwtService = new JwtService();
            $token = (string)$jwtService->generateToken();

            return $response->withJson(['connected' => $token], 200);  
        } else {
            return $response->withJson(['connected' => false], 403);
        }
    }

    public function isConnected($request, $response, $args) {

    }

    public function contact($request, $response, $args) {
        $body = $request->getParsedBody();
        mail('test@test.com', '[rbe-ouest.com]-' . $body['sujet'], $body['body']);
        return $response->withJson([], 201);
    }
}