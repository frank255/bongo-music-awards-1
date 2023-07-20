<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'event_title' => 'required|max:255',
            'event_name' => 'required|max:255',
            'event_number' => 'required',
            'event_date' => 'required',
            'event_status' => 'required',
        ];
    }
}
