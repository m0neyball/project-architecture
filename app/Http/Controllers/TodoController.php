<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class TodoController extends Controller
{
    public function index()
    {
        /*
        return response()->json([
            'code' => 511,
            'error' => 'Network Authentication Required'
        ], 511); // Status code here
        */

        return response()->json([
            'todos' => [
                [
                    'id' => 1,
                    'text' => 'test'
                ], [
                    'id' => 2,
                    'text' => 'hi'
                ]
            ]
        ]);
    }

    public function store($data)
    {
        dd($data);
    }
}
