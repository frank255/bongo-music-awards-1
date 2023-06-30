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
            $table->string('name', 255)->unique();
            $table->json('genres')->nullable();
            $table->text('biography')->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('website', 255)->unique()->nullable();
            $table->string('email', 255)->unique();
            $table->string('facebook', 255)->unique()->nullable();
            $table->string('twitter', 255)->unique()->nullable();
            $table->string('instagram', 255)->unique()->nullable();
            $table->string('youtube', 255)->unique()->nullable();
            $table->json('occupations')->nullable();
            $table->json('labels')->nullable();
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
