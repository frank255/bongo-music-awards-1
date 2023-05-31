<?php

namespace App\Http\Resources;

use App\Models\Event;
use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'event_id' => $this->event_id,
            'event_title' => $this->event_title,
            'event_number' => $this->event_number,
            'genre'=> GenreResource::collection($this->whenLoaded('genres')),
            'event_status' => $this->event_status,
            'event_date' => $this->event_date,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
