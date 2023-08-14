<?php

namespace App\Http\Controllers;

use App\Http\Resources\NomineeResource;
use App\Models\Nominee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class NomineesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $nominees = Nominee::all();
        return NomineeResource::collection($nominees);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_id' => ['required', 'integer'],
            'artist_name' => ['required', 'string'],
            'genre' => ['required', 'string'],
            'category' => ['required', 'string', 'max:255'],
            'artwork_name' => ['required', 'string'],
            'link' => ['required', 'string'],
        ]);

        if ($validator->fails()){
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $nominee = Nominee::create($validator->safe()->all());
        return (new NomineeResource($nominee))
            ->response()
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Nominee $nomenee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Nominee $nomenee)
    {
        $nomenee->delete();
        return response()->json([
            'message' => 'Nominee deleted successful',
            'status' => Response::HTTP_OK
        ]);
    }
}
