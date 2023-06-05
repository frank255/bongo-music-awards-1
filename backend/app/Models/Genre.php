<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Genre extends Model
{
    use HasFactory;

    protected $primaryKey = 'genre_id';
    protected $fillable = [
        'genre_name',
        'event_id'
    ];

    public function event(): HasOne
    {
        return $this->belongsTo(Event::class, 'event_id');
    }

    public function category() {
        return $this->hasMany(Category::class,'genre_id');
    }
}
