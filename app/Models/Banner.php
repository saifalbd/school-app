<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Banner extends Model
{
    protected $table = 'bannars';
    use HasFactory;
    protected $fillable = [
        "title",
        "message",
        "image_id"
    ];


    public function image()
    {
        return $this->belongsTo(Attachment::class,'image_id');
    }
}
