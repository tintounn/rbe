<?php
/**
 * Created by PhpStorm.
 * User: tintounn
 * Date: 18/03/18
 * Time: 13:59
 */

namespace Services;


use Models\Piece;

class PieceService
{
    public function findAll(array $filter = [], $limit = null)
    {
        $request = Piece::where($filter, '=');
        if ($limit) {
            $request = $request->take($limit);
        }
        $request = $request->with(['image']);

        return $request->get();
    }

    public function find($id)
    {
        return Piece::find($id);
    }

    public function create(array $data)
    {
        return Piece::create($data);
    }

    public function update($id, array $data)
    {
        return Piece::find($id)->update($data);
    }

    public function delete($id) {
        return Piece::delete($id);
    }
}