<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $users = Event::with('genres')->get();
        return EventResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'event_title' => 'required|string|max:255',
            'event_number' => 'required|string|max:255',
            'event_date' => 'required|date_format:Y-m-d|after:today',
            'event_status' => 'required|in:closed,opened',
        ]);

        if ($validator->fails()){
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $event = Event::create($validator->safe()->all());
        return (new EventResource($event))->response()->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }

    /**
     * Display the specified resource.
     */


    public function show($id)
    {
        $event = Event::with('genres')->find($id);

        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        return new EventResource($event);
    }





/*    public function show($id)
    {
        //return new EventResource(Event::findOrFail($id));
        if (DB::table('events')->where('eventId', $id)->doesntExist()) {
            return response()->json([
                'message' => 'Event Not Exist',
                'status' => Response::HTTP_NOT_FOUND
            ]);
        }
        return new EventResource(Event::findOrFail($id));
    }*/

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        if (DB::table('events')->where('eventId', $event->eventId)->doesntExist()) {
            return response()->json([
                'message' => 'Event Not Exist cannot be Updated',
                'status' => Response::HTTP_NOT_FOUND
            ]);
        }
        $event->update($request->validated());
        return new EventResource($event);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event): JsonResponse
    {
        $event->delete();
        return response()->json([
            'message' => 'Event deleted successful',
            'status' => Response::HTTP_OK
        ]);
    }
}
