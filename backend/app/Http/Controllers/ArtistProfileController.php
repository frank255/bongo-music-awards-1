<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistProfileResource;
use App\Models\ArtistProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class ArtistProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //pull the Artistprofile depending on authentication
        //What about admin(hataweza kunavigate token abilities)??
        //Auth::user()->id


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255', 'min:3','unique:artist_profiles,name'],
            'genres' => ['required','array'],
            'biography' => ['required','string'],
            'phone' => ['required','numeric','digits:12','unique:artist_profiles,phone'],
            'website' => ['required', 'string', 'max:255','unique:artist_profiles,website'],
            'email' => ['required','email','unique:artist_profiles,email','max:255'],
            'facebook' => ['required','string','unique:artist_profiles,facebook','max:255'],
            'twitter' => ['required', 'string','unique:artist_profiles,twitter','max:255'],
            'instagram' => ['required', 'string','unique:artist_profiles,instagram','max:255'],
            'youtube' => ['required', 'string','unique:artist_profiles,youtube','max:255'],
            'occupations' =>['required','array'],
            'labels' => ['required','array']
        ]);

        if ($validator->fails()){
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $artist_profile = ArtistProfile::create($validator->safe()->all());
        return new ArtistProfileResource($artist_profile);
    }

    /**
     * Display the specified resource.
     */
    public function show(ArtistProfile $artistProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $artistProfile = ArtistProfile::find($id);
        if (!$artistProfile){
            return response()->json(['message' => 'Artist profile not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255', 'min:3',],
            'genres' => ['required','array'],
            'biography' => ['required','string'],
            'phone' => ['required','numeric','digits:12',],
            'website' => ['required', 'string', 'max:255',],
            'email' => ['required','email'],
            'facebook' => ['required','string','max:255'],
            'twitter' => ['required', 'string','max:255'],
            'instagram' => ['required', 'string','max:255'],
            'youtube' => ['required', 'string','max:255'],
            'occupations' =>['required','array'],
            'labels' => ['required','array']
        ]);

        if ($validator->fails()){
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $artistProfile->update($validator->safe()->only([
            'name',
            'genres',
            'biography',
            'phone',
            'website',
            'email',
            'facebook',
            'twitter',
            'instagram',
            'youtube',
            'occupations',
            'labels'
        ]));

        return new ArtistProfileResource($artistProfile);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ArtistProfile $artistProfile)
    {
        //
    }
}
