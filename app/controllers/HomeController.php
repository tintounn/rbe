<?php

namespace Controllers;

class HomeController {
    public function home($request, $response, $args) {
        $data = \Models\Image::where(['path' => 'okk'], '=')->get();

        return $response->withJson($data, 200);
    }
}