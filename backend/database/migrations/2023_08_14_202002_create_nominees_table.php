<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nominees', function (Blueprint $table) {
            $table->id("nominee_id");
            $table->integer("event_id");
            $table->string("artist_name");
            $table->string("genre");
            $table->string("category");
            $table->string("artwork_name");
            $table->string("link");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nomenees');
    }
};
