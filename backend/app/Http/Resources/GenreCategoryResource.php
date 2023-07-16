<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GenreCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);

        return [
            'genre_id' => $this->genre_id,
            'categories' => new CategoryResorce(Category::find($this->genre_id)),
            'genre_name' => $this->genre_name,
            'created_at' => $this->created_at,
//            'event_id' => new EventResource(Event::find($this->event_id)),
//            'event_id' => $this->event_id,
        ];
    }
}
