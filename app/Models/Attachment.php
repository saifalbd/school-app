<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;

class Attachment extends Model
{
    protected $fillable = ['type','disk','path','sm_path','md_path','model','is_default'];

    protected $appends = ['url','sm_url'];

    protected static function booted()
    {
        static::deleting(function($model){
            $disk = Storage::disk($model->disk);
            $disk->delete($model->path);
        });
    }


    public function getSmUrlAttribute()
    {
        $disk = Storage::disk($this->disk);
        return $disk->url($this->sm_path);
    }
    

   

    public function getUrlAttribute()
    {
        $disk = Storage::disk($this->disk);
        return $disk->url($this->path);
    }
    

    public function getIsImgAttribute()
    {
        return Str::startsWith($this->type,'image');
    }
    public static function add(UploadedFile $file,string $model,$resize=true):Attachment{
        $model = class_basename($model);
       $type = $file->getClientMimeType();
       $ex = $file->getClientOriginalExtension();
       $disk = 'junk';
       $slug = 'school-app';
       $uid = uniqid();
       $name = $uid.'.'.$ex;
       $path  =$slug.'/'.$name;
       $img = Image::make($file->path());
       if($resize){
        $img->resize(875, 700, function ($const) {$const->aspectRatio();});

       }

        Storage::disk($disk)->put($path,$img->encode());

       

  

    $sm_path = $path;

       
      return static::create(compact('type','disk','path','sm_path','model'));
       
    }


    public function deleteWithAttach(){
        $disk = $this->disk;
    if(!$this->is_default){
        Storage::disk($disk)->delete([$this->path]);
    }
    
        $this->delete();
    }
}
