<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attachment;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BannarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Banner::query()->with('image')->get();
        return $items;
    }

 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=>['nullable','string'],
            'message'=>['nullable','string'],
            'image'=>['required','image']
        ]);

        $title = $request->title;
        $message = $request->get('message','');
    
          
            $attach = $request->file('image');
            if($attach){
               $avarar = Attachment::add($attach,Banner::class,false);
               $image_id = $avarar->id;
            }

       

        Banner::create(compact('title','message','image_id'));

        return response()->json('success');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Banner $banner)
    {
        $banner->load('image');
        return $banner;
    }

  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Banner $banner)
    {
        $request->validate([
            'title'=>['nullable','string'],
            'message'=>['nullable','string'],
            'image'=>['nullable','image']
        ]);

        $title = $request->title;
        $message = $request->get('message','');
    
        $image_id = $banner->image_id;
            $attach = $request->file('image');
            if($attach){
               $avarar = Attachment::add($attach,Banner::class,false);
               $image_id = $avarar->id;
            }

       

            $banner->update(compact('title','message','image_id'));

        return response()->json('success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banner $banner)
    {
        $banner->delete();
        $banner->avatar->deleteWithAttach();
    }
}
