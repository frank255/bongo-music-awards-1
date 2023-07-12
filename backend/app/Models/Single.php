<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Single extends Model
{
    use HasFactory;

    protected $fillable = [
        'single_name',
        'single_date',
        'single_link'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
