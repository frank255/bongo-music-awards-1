<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // return Album::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            'album_name' => ['string', 'required', 'max:255'],
            'album_link' => ['string', 'required', 'max:255'],
            'album_date' => ['string', 'required'],
            'number_of_tracks' => ['numeric', 'required'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
                'user' => $user->user_id,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $album = Album::create([
            'user_id' => $user->user_id,
            'album_name' => $request->input('album_name'),
            'album_link' => $request->input('album_link'),
            'album_date' => $request->input('album_date'),
            'number_of_tracks' => $request->input('number_of_tracks'),
        ]);

        // $album = Album::where('user_id', $user->user_id)->first();

        // if (!$album) {
        //     $album = new Album();
        //     $album->user_id = $user->user_id;
        //     $album->album_name = $request->input('album_name');
        //     $album->album_link = $request->input('album_link');
        //     $album->album_date = $request->input('album_date');
        //     $album->number_of_tracks = $request->input('number_of_tracks');
        // }


        // if ($album->save()) {
        //     return response(new AlbumResource($album))
        //         ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
        // }

        return response()->json([
            'album' => $album,
            'status' => Response::HTTP_CREATED,
            'message' => "Album stored successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($user_id)
    {
        $albums = Album::where('user_id', $user_id)->get(); // Retrieve all albums for the user

        if ($albums->isEmpty()) {
            return response()->json([
                'message' => Response::$statusTexts[Response::HTTP_NOT_FOUND],
                'status' => Response::HTTP_NOT_FOUND
            ])->setStatusCode(Response::HTTP_NOT_FOUND, Response::$statusTexts[Response::HTTP_NOT_FOUND]);
        }

        return response(AlbumResource::collection($albums))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Album $album)
    {
        //
    }
}
