<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistProfileResource;
use App\Models\ArtistProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use function Termwind\renderUsing;

class ArtistProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artist_profile = ArtistProfile::all();
        return \response(ArtistProfileResource::collection($artist_profile));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'genres' => ['array'],
            'biography' => [ 'string'],
            'phone' => [ 'numeric', 'digits:12', 'unique:artist_profiles,phone'],
            'website' => [ 'string', 'max:255', 'unique:artist_profiles,website'],
            'email' => ['email', 'unique:artist_profiles,email', 'max:255'],
            'facebook' => ['string', 'unique:artist_profiles,facebook', 'max:255'],
            'twitter' => ['string', 'unique:artist_profiles,twitter', 'max:255'],
            'instagram' => ['string', 'unique:artist_profiles,instagram', 'max:255'],
            'youtube' => ['string', 'unique:artist_profiles,youtube', 'max:255'],
            'occupations' => ['array'],
            'labels' => ['array']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $artist_profile = ArtistProfile::create([
            'name' => $user->name,
            'email' => $user->email,
            'genres' => $request->input('genres'),
            'biography' => $request->input('biography'),
            'phone' => $request->input('phone'),
            'website' => $request->input('website'),
            'facebook' => $request->input('facebook'),
            'twitter' => $request->input('twitter'),
            'instagram' => $request->input('instagram'),
            'youtube' => $request->input('youtube'),
            'occupations' => $request->input('occupations'),
            'labels' => $request->input('labels'),
        ]);

        return response(new ArtistProfileResource($artist_profile))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $artistProfile =  ArtistProfile::find($id);
        if (!$artistProfile) {
            return \response()->json([
                'message' => Response::$statusTexts[Response::HTTP_NOT_FOUND],
                'status' => Response::HTTP_NOT_FOUND
            ])->setStatusCode(Response::HTTP_NOT_FOUND, Response::$statusTexts[Response::HTTP_NOT_FOUND]);
        }

        return \response(new ArtistProfileResource($artistProfile))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ArtistProfile $artistProfile)
    {
        //
    }

    public function updateBio(Request $request, $id)
    {
        $artistProfile = ArtistProfile::find($id);
        $artistProfile->name = $request->input('name');

        // Deserialization: Parse the genres JSON string into an array
        $genresArray = json_decode($request->input('genres'), true);
        $artistProfile->genres = json_encode($genresArray);

        $artistProfile->biography = $request->input('biography');

        if ($artistProfile->save()) {
            return response()->json([
                'status' => Response::HTTP_CREATED,
                'message' => "Profile updated"
            ])->setStatusCode(Response::HTTP_CREATED, Response::$statusTexts[Response::HTTP_CREATED]);
        }

        return response()->json([
            'status' => Response::HTTP_FORBIDDEN,
            'message' => "Profile update failed"
        ]);
    }


    public function updateArtistInfo(Request $request, $id){
        $artistProfile = ArtistProfile::find($id);

        $artistProfile->website =$request->input('website');
        $artistProfile->phone = $request->input('phone');
        $artistProfile->email = $request->input('email');
        $artistProfile->youtube = $request->input('youtube');
        $artistProfile->facebook = $request->input('facebook');
        $artistProfile->instagram = $request->input('instagram');
        $artistProfile->twitter = $request->input('twitter');
        $artistProfile->occupations = $request->input('occupations');
        $artistProfile->labels = $request->input('labels');

        if($artistProfile->save()){
            return \response()->json([
                'status'=>Response::HTTP_CREATED,
                'message'=> "Profile updated"
            ])->setStatusCode(Response::HTTP_CREATED, Response::$statusTexts[Response::HTTP_CREATED]);
        }

        return \response()->json([
            'status'=>Response::HTTP_FORBIDDEN,
            'message'=> "Profile failed"
        ]);
    }

}
