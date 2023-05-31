<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateGenreRequest;
use App\Http\Resources\GenreResource;
use App\Models\Event;
use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $genres = Genre::all();
        return GenreResource::collection($genres);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //Thinking how to improve this with using relationship (btn genre and event)
        // to avoid event_id to be return back
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }
        return new GenreResource($genre);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genre $genre)
    {

        $validator = Validator::make($request->all(), [
            'genre_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ]);
        }

        $genre->update($validator->safe()->only(['genre_name']));
        return new GenreResource($genre);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genre $genre)
    {
        $genre->delete();
        return response()->json([
            'message' => 'Genre deleted successful',
            'status' => Response::HTTP_OK
        ]);
    }
}
