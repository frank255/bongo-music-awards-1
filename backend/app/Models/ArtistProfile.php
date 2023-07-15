<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistProfile extends Model
{
    use HasFactory;

    protected $casts = [
        'genres' => 'array',
        'occupations' => 'array',
        'labels' => 'array',
    ];

    protected $fillable = [
        'name',
        'genres',
        'biography',
        'phone',
        'website',
        'email',
        'facebook',
        'twitter',
        'instagram',
        'youtube',
        'occupations',
        'labels',
        'profile_image',
    ];

    // public function albums()
    // {
    //     return $this->hasMany(Album::class)->whereHas('artistProfile.user', function ($query) {
    //         $query->where('role', 'artist');
    //     });
    // }

    // public function singles()
    // {
    //     return $this->hasMany(Single::class)->whereHas('artistProfile.user', function ($query) {
    //         $query->where('role', 'artist');
    //     });
    // }
}
