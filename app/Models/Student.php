<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Str;

class Student extends Model
{
    use HasFactory;
    protected $appends = ['sortNote'];
    protected $fillable = [
        "year",
        "nid",
        "name",
        "email",
        "phone",
        "profession",
        "organization",
        "designation",
        "district",
        "thana",
        "address",
        "note",
        'avatar_id'
    ];



    public function avatar()
    {
        return $this->belongsTo(Attachment::class,'avatar_id');
    }

    public function getSortNoteAttribute()
    {
        return Str::limit($this->note,50);
    }
}
