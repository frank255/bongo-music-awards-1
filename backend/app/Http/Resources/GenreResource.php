<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GenreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'genre_id' => $this->genre_id,
            'genre_name' => $this->genre_name,
            'created_at' => $this->created_at,
            'event_id' => $this->event_id,
            //'genre_category' => $this -> genre_category,
        ];
    }
}
