<?php
/**
 * Created by PhpStorm.
 * User: tintounn
 * Date: 18/03/18
 * Time: 13:50
 */

namespace Controllers;


use Services\PieceService;

class PieceController
{
    public function findAll($request, $response, $args)
    {
        try {
            $pieceService = new PieceService();
            $filters = $request->getQueryParams();
            $limit = null;

            if(!empty($filters['limit'])) {
                $limit = $filters['limit'];
                unset($filters['limit']);
            }

            $data = $pieceService->findAll($filters, $limit);

            return $response->withJson(['pieces' => $data], 200);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }

    public function find($request, $response, $args)
    {
        try {
            $pieceService = new PieceService();
            return $response->withJson(['piece' => $pieceService->find($args['id'])], 200);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }

    public function create($request, $response, $args)
    {
        /*if(empty($_SESSION['connected'])) {
            return $response->withJson(['message' => 'forbidden'], 403);
        }*/

        try {
            $pieceService = new PieceService();
            $uploadedFiles = $request->getUploadedFiles();
            $body = $request->getParsedBody();

            $uploadedFile = $uploadedFiles['file'];
            if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                $filename = moveUploadedFile(__DIR__ . '/../../images', $uploadedFile);
            }

            $body['path'] = $filename;
            $body['ordre'] = 1;
            return $response->withJson(['piece' => $pieceService->create($body)], 201);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }

    public function update($request, $response, $args)
    {
        if(!isset($_SESSION['connected'])) {
            return $response->withJson(['message' => 'forbidden'], 403);
        }

        try {
            $pieceService = new PieceService();
            return $response->withJson(['piece' => $pieceService->update($args['id'], $request->getParsedBody())], 201);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }

    public function delete($request, $response, $args)
    {
        if(empty($_SESSION['connected'])) {
            return $response->withJson(['message' => 'forbidden'], 403);
        }

        try {
            $pieceService = new PieceService();
            return $response->withJson(['piece' => $pieceService->delete($args['id'])], 201);
        } catch(\Exception $e) {
            return $response->withJson(['message' => $e->getMessage()], 500);
        }
    }
}