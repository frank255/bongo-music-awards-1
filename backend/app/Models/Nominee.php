<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nominee extends Model
{
    use HasFactory;

    protected $primaryKey = 'nominee_id';

    protected $fillable = [
        'event_id',
        'artist_name',
        'genre',
        'category',
        'artwork_name',
        'link'
    ];

}
