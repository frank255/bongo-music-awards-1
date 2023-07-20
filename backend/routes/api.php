<?php

use App\Http\Controllers\AlbumController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\GenreController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ArtistProfileController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SingleController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/artist_bio/{id}', [ArtistProfileController::class, 'updateBio']);
    Route::post('/artist_info/{id}', [ArtistProfileController::class, 'updateArtistInfo']);
    Route::post('/activateEvent/{id}', [EventsController::class, 'activateEvent']);
    Route::apiResource('/artists', ArtistProfileController::class);
    Route::apiResource('/albums', AlbumController::class);
    Route::apiResource('/single', SingleController::class);
});

Route::post('authenticated', [AuthController::class, 'index'])->middleware('auth:sanctum');

Route::apiResource('/events', EventsController::class);
Route::apiResource('/genres', GenreController::class);
Route::apiResource('/categories', CategoryController::class);
// Route::apiResource('/artists',ArtistProfileController::class)->middleware('auth:sanctum');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);


// Route::post('/artist_bio/{id}',[ArtistProfileController::class,'updateBio'])->middleware('auth:sanctum');
// Route::post('/artist_info/{id}',[ArtistProfileController::class,'updateArtistInfo'])->middleware('auth:sanctum');
Route::get('/artist_list', [ArtistProfileController::class, 'index']);
Route::get('/artist_list/{user_id}', [ArtistProfileController::class, 'show']);

Route::get('/genre_categories/{event_id}',[GenreController::class,'getGenreCategory']);

//Route::middleware('auth:sanctum')->group( function (Request $request) {
//    Route::post('/logout',[AuthController::class,'logout']);
//});
