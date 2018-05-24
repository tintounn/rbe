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
        return $request->get();
    }

    public function find($id)
    {
        return Piece::find($id);
    }

    public function create(array $data)
    {
        $piece = new Piece();
        $piece->libelle = $data['libelle'];
        $piece->path = $data['path'];
        $piece->ordre = $data['ordre'];
        $piece->location = $data['location'];
        $piece->save();
        return $piece;
    }

    public function update($id, array $data)
    {
        $piece = Piece::find($id);
        $piece->ordre = $data['ordre'];
        return $piece->save();
    }

    public function delete($id) {
        $piece = Piece::where('id', $id)->first();
        $piece->delete();
    }
}