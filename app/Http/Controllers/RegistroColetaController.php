<?php

namespace App\Http\Controllers;

use App\Models\RegistroColeta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegistroColetaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return RegistroColeta::withTrashed()->with('user')->where('user_id', $request->user()->id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $dadosValidados = Validator::make($request->all(), [
            'data_hora' => 'required',
            'cep' => 'required|numeric',
            'numero' => 'required|numeric',
            'rua' => 'required|string',
            'bairro' => 'required|string',
            'cidade' => 'required|string',
            'uf' => 'required|string',
            'descricao' => 'exclude_if:descricao,null|nullable|string|max:300',
        ])->validated();
        $dadosValidados['user_id'] = $user->id;
        try {
            $criado = RegistroColeta::create($dadosValidados);
            return response(['message' => 'Coleta registrada!'], 200);
        } catch (\Throwable $th) {
            return response(['error' => $th->getMessage(), 'line' => $th->getLine()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return RegistroColeta::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        $user = $request->user();
        $dadosValidados = Validator::make($request->all(), [
            'data_hora' => 'required',
            'cep' => 'required|numeric',
            'numero' => 'required|numeric',
            'rua' => 'required|string',
            'bairro' => 'required|string',
            'cidade' => 'required|string',
            'uf' => 'required|string',
            'descricao' => 'exclude_if:descricao,null|nullable|string|max:300',
        ])->validated();
        $dadosValidados['user_id'] = $user->id;
        try {
            $editado = RegistroColeta::find($id)->update($dadosValidados);
            return response(['message' => 'Coleta editada!'], 200);
        } catch (\Throwable $th) {
            return response(['error' => $th->getMessage(), 'line' => $th->getLine()], 400);
        }
    }

    public function confirmarColeta($id){
        try {
            $editado = RegistroColeta::find($id)->update(['status' => 1]);
            return response(['message' => 'Coleta confirmada!'], 200);
        } catch (\Throwable $th) {
            return response(['error' => $th->getMessage(), 'line' => $th->getLine()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        RegistroColeta::find($id)->delete();
    }

    public function forceDelete($id)
    {
        RegistroColeta::withTrashed()->find($id)->forceDelete();
    }
}
