<?php
/**
 * Created by PhpStorm.
 * User: tintounn
 * Date: 18/03/18
 * Time: 13:59
 */

namespace Services;


use Models\PieceType;

class PieceTypeService
{
    public function findAll(array $filter)
    {
        $request = PieceType::where($filter, '=')->with(['image']);
        return $request->get();
    }

    public function find($id)
    {
        return PieceType::find($id);
    }

    public function create(array $data)
    {
        return PieceType::create($data);
    }

    public function update($id, array $data)
    {
        return PieceType::find($id)->update($data);
    }

    public function delete($id) {
        return PieceType::delete($id);
    }
}