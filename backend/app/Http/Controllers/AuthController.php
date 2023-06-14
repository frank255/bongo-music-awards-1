<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255| min:3',
            'email' => 'required|email|string|unique:users,email',
            'password' => 'required|confirmed|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $user = User::create($validator->safe()->all());
        return \response()->json([
            'user' => $user,
            'role' => 'artist',
            'token' => $user->createToken('token')->plainTextToken
        ])->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);


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


    }
}
