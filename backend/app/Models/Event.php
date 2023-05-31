<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';
    protected $primaryKey = 'event_id';

    protected $fillable = [
        'event_title',
        'event_number',
        //'genre',
        'event_date',
        'event_status',
    ];

    public function genres() {
        return $this->hasMany(Genre::class,'event_id');
    }
}
