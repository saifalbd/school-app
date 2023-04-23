@extends('visitor.layouts.app')
@section('content')
<section class="show-student container">
    <div class="title">
        Profile
    </div>
    <div>
        <div class="avatar-box">
            <img src="{{url('bg/hero.jpg')}}" alt="" srcset="">
        </div>
    </div>
    <div class="detail-title">
        Details
    </div>
    <div class="sub-info">
        <div><b>Name:</b></div>
        <div> {{$student->name}}</div>
    </div>

    <!--start-->
    <div class="sub-info">
        <div><b>Profession:</b></div>
        <div>{{$student->profession}}</div>
    </div>
    <!--start-->
    <div class="sub-info">
        <div><b>Organization:</b></div>
        <div>{{$student->organization}}</div>
    </div>
    <!--start-->
    <div class="sub-info">
        <div><b>Designation:</b></div>
        <div>{{$student->designation}}</div>
    </div>
    <!--start-->
    <div class="sub-info">
        <div><b>Designation:</b></div>
        <div>{{$student->designation}}</div>
    </div>

    <!--start-->
    <div class="sub-info">
        <div><b>District:</b></div>
        <div>{{$student->district}}</div>
    </div>
    <!--start-->
    <div class="sub-info">
        <div><b>Thana:</b></div>
        <div>{{$student->thana}}</div>
    </div>


</section>
@endsection