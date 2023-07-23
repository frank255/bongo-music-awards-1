<?php

namespace App\Http\Controllers;

use App\Http\Resources\SingleResource;
use App\Models\Single;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class SingleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Single::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'single_name' => ['string', 'required', 'max:255'],
            'single_link' => ['string', 'required', 'max:255'],
            'single_date' => ['string', 'required'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $single = Single::create([
            'user_id' => $user->user_id,
            'single_name' => $request->input('single_name'),
            'single_link' => $request->input('single_link'),
            'single_date' => $request->input('single_date'),
        ]);

        // if ($single) {
        //     return response(new SingleResource($single))
        //         ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
        // }
        $singles = Single::where('user_id', $user->user_id)->get();
        return response(SingleResource::collection($singles))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }


    /**
     * Display the specified resource.
     */
    public function show($user_id)
    {
        $singles = Single::where('user_id', $user_id)->get(); // Retrieve all singles for the user

        if ($singles->isEmpty()) {
            return response()->json([
                'message' => Response::$statusTexts[Response::HTTP_NOT_FOUND],
                'status' => Response::HTTP_NOT_FOUND
            ])->setStatusCode(Response::HTTP_NOT_FOUND, Response::$statusTexts[Response::HTTP_NOT_FOUND]);
        }

        return response(SingleResource::collection($singles))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $single_id)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'single_name' => 'required|string',
            'single_date' => 'required|string',
            'single_link' => 'required|string', // Assuming the "status" field is stored in the "event_status" column in the database
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $single = Single::find($single_id);

        if (!$single) {
            return response()->json(['error' => 'single not found'], 404);
        }

        $single->update($request->all());
        $singles = Single::where('user_id', $user->user_id)->get();
        return response(SingleResource::collection($singles))
            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Single $single)
    {
        //
    }
}
