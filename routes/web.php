<?php

use App\Http\Controllers\RegistroColetaController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function(){
    Route::get('/coleta/all', [RegistroColetaController::class, 'index']);
    Route::post('/coleta/salvar', [RegistroColetaController::class, 'store']);
    Route::patch('/coleta/editar/{id}', [RegistroColetaController::class, 'update']);
    Route::patch('/coleta/confirmar/{id}', [RegistroColetaController::class, 'confirmarColeta']);
    Route::get('/coleta/{id}', [RegistroColetaController::class, 'show']);
    Route::delete('/coleta/{id}', [RegistroColetaController::class, 'destroy']);
    Route::post('/coleta/restore/{id}', [RegistroColetaController::class, 'restore']);
    Route::delete('/coleta/force/{id}', [RegistroColetaController::class, 'forceDelete']);
});
