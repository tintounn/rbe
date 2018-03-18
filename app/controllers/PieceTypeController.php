<?php
/**
 * Created by PhpStorm.
 * User: tintounn
 * Date: 18/03/18
 * Time: 13:50
 */

namespace Controllers;


use Services\PieceTypeService;

class PieceTypeController
{
    public function findAll($request, $response, $args)
    {
        try {
            $pieceTypeService = new PieceTypeService();
            $filters = $request->getQueryParams();

            $data = $pieceTypeService->findAll($filters);

            return $response->withJson(['pieceTypes' => $data], 200);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }

    public function find($request, $response, $args)
    {
        try {
            $pieceTypeService = new PieceTypeService();

            $data = $pieceTypeService->find($args['id']);

            return $response->withJson(['pieceType' => $data], 200);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }

    public function create($request, $response, $args)
    {

    }

    public function update($request, $response, $args)
    {

    }

    public function delete($request, $response, $args)
    {

    }
}