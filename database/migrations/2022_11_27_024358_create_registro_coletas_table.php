<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistroColetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registro_coletas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->dateTime('data_hora');
            $table->string('cep', 8);
            $table->string('numero', 8);
            $table->string('rua');
            $table->string('bairro');
            $table->string('cidade');
            $table->string('uf', 2);
            $table->string('descricao', 300)->nullable();
            $table->tinyInteger('status')->default(0)->comment('0 - aguardando, 1 - coletado');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registro_coletas');
    }
}
