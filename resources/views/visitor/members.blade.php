<x-visitor-layout page="member-page">
<div class="is-flex is-justify-content-start">
    <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="{{route('members')}}">Members</a></li>
  </ul>
</nav>
    </div>
   
<section class="members">
    @foreach ($items as $key=>$collection)
    <div class="title">Student {{$key}}</div>
    <div class="collection  full">
        @foreach ($collection as $student)
        <div class="card-box">
        <div class="m-card">
            <div class="image-box">
                <img src="{{$student->avatar->url}}" alt="" srcset="">
            </div>
            <div class="info-box">
                <div class="title">Name: {{$student->name}}</div>
                <div class="info">Profession: {{$student->profession}}</div>
                <div class="info">Organization Name: {{$student->organization}}</div>
                <div class="info">Address: {{$student->address}}</div>
            </div>
            <div class="footer">
                <a class="button is-info is-outlined is-small" href="{{route('showStudent',['id'=>$student->id])}}">Show</a>
            </div>
        </div>
        </div>
        @endforeach

    </div>
    @endforeach
</section>


</x-visitor-layout>