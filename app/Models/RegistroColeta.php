<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RegistroColeta extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'data_hora', 'cep', 'numero', 'rua', 'bairro', 'cidade', 'uf', 'descricao', 'status'];

    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
