<x-visitor-layout page="home-page">

<section class="show-student" style="margin-top: 50px;">
    <div class="is-flex is-justify-content-start">
    <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="{{route('members')}}">Members</a></li>
  </ul>
</nav>
    </div>
        <div class="show-card">
        <div class="left">
            <div class="top-part">
                <div class="avatar-box">
                    <img src="{{$student->avatar->url}}" alt="" srcset="">
                </div>
                <h4 class="name">Name : {{$student->name}}</h4>
                <p>
                   {{$student->note}} 
                </p>
            </div>

            <div class="socials">
                <a><span class="icon"><i class="fa-brands fa-facebook-square"></i></span></a>
                <a><span class="icon"><i class="fa-brands fa-twitter-square"></i></span></a>
                <a><span class="icon"><i class="fa-brands fa-instagram-square"></i></span></a>
            </div>
        </div>
        <div class="right">
            <div class="header">
                Details
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div><b>Name:</b></div>
                        <div> {{$student->name}}</div>
                    </li>
                    <li>
                        <div><b>Profession:</b></div>
                        <div>{{$student->profession}}</div>
                    </li>
                    <li>
                        <div><b>Organization:</b></div>
                        <div>{{$student->organization}}</div>
                    </li>
                    <li>
                        <div><b>Designation:</b></div>
                        <div>{{$student->designation}}</div>
                    </li>
                    <li>
                        <div><b>Phone:</b></div>
                        <div>{{$student->phone}}</div>
                    </li>
                    <li>
                        <div><b>Email:</b></div>
                        <div>{{$student->email}}</div>
                    </li>
                    <li>
                        <div><b>Designation:</b></div>
                        <div>{{$student->designation}}</div>
                    </li>
                    <li>
                        <div><b>District:</b></div>
                        <div>{{$student->district}}</div>
                    </li>
                    <li>
                        <div><b>Thana:</b></div>
                        <div>{{$student->thana}}</div>
                    </li>
                    <li>
                        <div><b>Present address:</b></div>
                        <div>{{$student->address}}</div>
                    </li>
                    <li>
                        <div><b>Permanent Address:</b></div>
                        <div>{{$student->address_perm}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</section>
</x-visitor-layout>