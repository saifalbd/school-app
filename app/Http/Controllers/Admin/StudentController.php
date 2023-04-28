<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attachment;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Student::query()->with('avatar')->paginate(200);

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
            "year"=> ['required','numeric'],
            "nid"=> ['nullable','numeric'],
            "name"=> ['required','string'],
            "email"=> ['nullable','email'],
            "phone"=> ['nullable','string'],
            "profession"=> ['required','string'],
            "organization"=> ['required','string'],
            "designation"=> ['required','string'],
            "district"=> ['required','string'],
            "thana"=> ['required','string'],
            "address"=> ['nullable','string'],
            'address_perm'=> ['nullable','string'],
            "note"=> ['nullable','string'],
            'status'=>['nullable','in:0,1'],
            'avatar'=>['required','image']
           ]);
    
    
           $avatar_id = 1;
           $attach = $request->file('avatar');
           if($attach){
              $avarar = Attachment::add($attach,Student::class);
              $avatar_id = $avarar->id;
           }

           $status = $request->get('status',1);
          
          
           $list = $request->only(["year",
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
           'address_perm',
           "note"]);
    
           $list = array_merge($list,compact('avatar_id','status'));
    
        $st =Student::create($list);

           if($request->has('redirect')){
            return redirect()->route('addMe',['succcess'=>'Successfully Submited Request Wait SomeTime We are Approved Your Request']);
           }else{
            return $st;
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        $student->load('avatar');
        return $student;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }


    public function activeToggle(Student $student){
        
        $status = !$student->status;

        $student->update(compact('status'));
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {

       
   
        $request->validate([
            "year"=> ['required','numeric'],
            "nid"=> ['required','numeric'],
            "name"=> ['required','string'],
            "email"=> ['nullable','email'],
            "phone"=> ['nullable','string'],
            "profession"=> ['required','string'],
            "organization"=> ['required','string'],
            "designation"=> ['required','string'],
            "district"=> ['required','string'],
            "thana"=> ['required','string'],
            "address"=> ['nullable','string'],
            "note"=> ['nullable','string'],
            'avatar'=>['nullable','image'],
            'address_perm'=> ['nullable','string'],
           ]);
    
    
          
           $avatar_id = $student->avatar_id;
           $attach = $request->file('avatar');
           if($attach){
              $avarar = Attachment::add($attach,Student::class);
              $avatar_id = $avarar->id;
           }
          
    
          
           $list = $request->only(["year",
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
           'address_perm',
           "note"]);
    
           $list = array_merge($list,compact('avatar_id'));
    
           $student->update($list);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        $student->delete();
        $student->avatar->deleteWithAttach();
    }
}
