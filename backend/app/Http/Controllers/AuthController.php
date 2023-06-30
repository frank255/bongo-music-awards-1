<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\ArtistProfileController;
class AuthController extends Controller
{
    public function index(Request $request){

    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|min:3',
            'email' => 'required|email|string|unique:users,email',
            'password' => 'required|confirmed|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        // Create the user profile
        $artistProfileController = new ArtistProfileController();
        $artistProfile = $artistProfileController->store($request, $user);

        return response()->json([
            'user' => $user,
            'profile' => $artistProfile,
            'role' => 'artist',
            'token' => $user->createToken('token')->plainTextToken
        ])->setStatusCode(Response::HTTP_CREATED, Response::$statusTexts[Response::HTTP_CREATED]);
    }



    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|string',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        if(!Auth::attempt($request->only(['email','password']))){
            return response()->json([
                'message' => "credential do not found",
                'status' => Response::HTTP_NOT_FOUND,
            ])->setStatusCode(Response::HTTP_NOT_FOUND, Response::$statusTexts[Response::HTTP_NOT_FOUND]);
        }

        $user = User::where('email',$request->email)->first();
        //$user = Auth::user();
        return response()->json([
            'user' => $user,
            'status' => Response::HTTP_OK,
            'token' => $user->createToken('login')->plainTextToken,
            'role' => ($user->is_admin) ? 'admin':'artist',
        ])->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);


    }

    public function logout(Request $request){
        return \response()->json($request->all());

    }
}
