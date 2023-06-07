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
        Schema::create('artist_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name',255)->unique();
            $table->json('genres');
            $table -> text('biography');
            $table -> string('phone')->unique();
            $table -> string('website',255)->unique();
            $table -> string('email',255)->unique();
            $table -> string('facebook',255)->unique();
            $table -> string('twitter',255)->unique();
            $table -> string('instagram',255)->unique();
            $table -> string('youtube',255)->unique();
            $table -> json('occupations');
            $table -> json('labels');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artist_profiles');
    }
};
