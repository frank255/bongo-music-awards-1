<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $primaryKey = 'category_id';
    protected $fillable = [
      'category_name',
      'genre_id'
    ];

    public function genres()
    {
        return $this->belongsTo(Genre::class, 'genre_id');
    }
}
