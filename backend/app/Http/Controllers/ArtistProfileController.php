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
use Illuminate\Support\Facades\Storage;

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
    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'genres' => ['array'],
    //         'biography' => ['string'],
    //         'phone' => ['numeric', 'digits:12', 'unique:artist_profiles,phone'],
    //         'website' => ['string', 'max:255', 'unique:artist_profiles,website'],
    //         'email' => ['email', 'unique:artist_profiles,email', 'max:255'],
    //         'facebook' => ['string', 'unique:artist_profiles,facebook', 'max:255'],
    //         'twitter' => ['string', 'unique:artist_profiles,twitter', 'max:255'],
    //         'instagram' => ['string', 'unique:artist_profiles,instagram', 'max:255'],
    //         'youtube' => ['string', 'unique:artist_profiles,youtube', 'max:255'],
    //         'occupations' => ['array'],
    //         'labels' => ['array'],
    //         'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'message' => $validator->messages(),
    //             'status' => Response::HTTP_FORBIDDEN,
    //         ])->setStatusCode(Response::HTTP_FORBIDDEN);
    //     }

    //     $user = $request->user();

    //     // Ensure user has an associated artist profile
    //     if (!$user->artistProfile) {
    //         // Create a new artist profile if it doesn't exist
    //         $artist_profile = ArtistProfile::create([
    //             'user_id' => $user->user_id,
    //             'name' => $user->name,
    //             'email' => $user->email,
    //         ]);
    //     } else {
    //         $artist_profile = $user->artistProfile;
    //     }

    //     $imageUrl = null;
    //     if ($request->hasFile('profile_image')) {
    //         $image = $request->file('profile_image');
    //         $imageName = time() . '.' . $image->getClientOriginalExtension();
    //         $destinationPath = 'storage/images/profile_images';
    //         $image->move($destinationPath, $imageName);
    //         $imageUrl = '/'.$destinationPath . '/' . $imageName;
    //     }

    //     // Update the artist profile
    //     $artist_profile->update([
    //         'genres' => $request->input('genres'),
    //         'biography' => $request->input('biography'),
    //         'phone' => $request->input('phone'),
    //         'website' => $request->input('website'),
    //         'facebook' => $request->input('facebook'),
    //         'twitter' => $request->input('twitter'),
    //         'instagram' => $request->input('instagram'),
    //         'youtube' => $request->input('youtube'),
    //         'occupations' => $request->input('occupations'),
    //         'labels' => $request->input('labels'),
    //         'profile_image' => $imageUrl,
    //     ]);

    //     return response(new ArtistProfileResource($artist_profile))
    //         ->setStatusCode(Response::HTTP_OK);
    // }




    /**
     * Display the specified resource.
     */
    public function show($user_id)
    {
        $artistProfile = ArtistProfile::where('user_id', $user_id)->first();

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

    public function updateBio(Request $request, $user_id)
    {
        // $artistProfile = ArtistProfile::find($user_id);
        $artistProfile = ArtistProfile::where('user_id', $user_id)->first();

        $artistProfile->name = $request->input('name');
        // Deserialization: Parse the genres JSON string into an array
        $genresArray = json_decode($request->input('genres'), true);
        $artistProfile->genres = json_encode($genresArray);

        $artistProfile->biography = $request->input('biography');

        if ($request->hasFile('profile_image')) {
            $file = $request->file('profile_image');
            $path = $file->store('public/images/profile_images');
            $artistProfile->profile_image = Storage::url($path);

            $message = 'Profile image is present in the request';
        } else {
            $artistProfile->profile_image = null;

            $message = 'Profile image is not present in the request';
        }

        if ($artistProfile->save()) {
            return \response(new ArtistProfileResource($artistProfile))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
        }

        return response()->json([
            'status' => Response::HTTP_FORBIDDEN,
            'message' => "Profile update failed"
        ]);
    }



    public function updateArtistInfo(Request $request, $user_id)
    {

        $artistProfile = ArtistProfile::where('user_id', $user_id)->first();
        $artistProfile->website = $request->input('website');
        $artistProfile->phone = $request->input('phone');
        $artistProfile->email = $request->input('email');
        $artistProfile->youtube = $request->input('youtube');
        $artistProfile->facebook = $request->input('facebook');
        $artistProfile->instagram = $request->input('instagram');
        $artistProfile->twitter = $request->input('twitter');
        $artistProfile->occupations = $request->input('occupations');
        $artistProfile->labels = $request->input('labels');

        if ($artistProfile->save()) {
            return \response(new ArtistProfileResource($artistProfile))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
        }

        return \response()->json([
            'status' => Response::HTTP_FORBIDDEN,
            'message' => "Profile failed"
        ]);
    }


    public function store(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            // Validation rules
            'name' => ['string'],
            'genres' => ['string'],
            'biography' => ['string'],
            'phone' => ['numeric', 'digits:10', 'unique:artist_profiles,phone'],
            'website' => ['string', 'max:255', 'unique:artist_profiles,website'],
            'email' => ['email', 'unique:artist_profiles,email', 'max:255'],
            'facebook' => ['string', 'unique:artist_profiles,facebook', 'max:255'],
            'twitter' => ['string', 'unique:artist_profiles,twitter', 'max:255'],
            'instagram' => ['string', 'unique:artist_profiles,instagram', 'max:255'],
            'youtube' => ['string', 'unique:artist_profiles,youtube', 'max:255'],
            'occupations' => ['string'],
            'labels' => ['string'],
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $artistProfile = ArtistProfile::where('user_id', $user->user_id)->first();

        // If the artist profile doesn't exist, create a new one
        if (!$artistProfile) {
            $artistProfile = new ArtistProfile();
            $artistProfile->user_id = $user->user_id;
            $artistProfile->name = $request->input('name');
            $artistProfile->email = $request->input('email');
            $artistProfile->genres = $request->input('genres');
            $artistProfile->biography = $request->input('biography');
            $artistProfile->phone = $request->input('phone');
            $artistProfile->website = $request->input('website');
            $artistProfile->twitter = $request->input('twitter');
            $artistProfile->instagram = $request->input('instagram');
            $artistProfile->youtube = $request->input('youtube');
            $artistProfile->occupations = $request->input('occupations');
            $artistProfile->labels = $request->input('labels');
        }

        // Assign the request data to the artist profile

        if ($request->hasFile('profile_image')) {
            $file = $request->file('profile_image');
            $path = $file->store('public/images/profile_images');
            $artistProfile->profile_image = Storage::url($path);
        }

        if ($artistProfile->save()) {
            return \response(new ArtistProfileResource($artistProfile))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
        }

        return response()->json([
            'status' => Response::HTTP_FORBIDDEN,
            'message' => "Profile update failed"
        ]);
    }
}
