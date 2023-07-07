<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\GenreController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ArtistProfileController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('authenticated', [AuthController::class, 'index'])->middleware('auth:sanctum');

Route::apiResource('/events',EventsController::class);
Route::apiResource('/genres',GenreController::class);
Route::apiResource('/categories',CategoryController::class);
Route::apiResource('/artist_profile',ArtistProfileController::class);
// Route::post('/artist_profile',ArtistProfileController::class,'updateProfile');
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout']);


Route::put('/artist_bio/{id}',[ArtistProfileController::class,'updateBio']);
Route::put('/artist_info/{id}',[ArtistProfileController::class,'updateArtistInfo']);

//Route::middleware('auth:sanctum')->group( function (Request $request) {
//    Route::post('/logout',[AuthController::class,'logout']);
//});
