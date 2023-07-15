<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'album_name',
        'album_date',
        'album_link',
        'number_of_tracks',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
