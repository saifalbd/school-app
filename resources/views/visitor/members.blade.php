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
    <div class="container">
    @foreach ($items as $key=>$collection)
    <div class="title">Student {{$key}}</div>
    <div class="collection  full">
        @foreach ($collection as $student)
        <div class="card">
  <div class="card-image">
    <figure class="image is-1by1">
      <img src="{{$student->avatar->url}}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
     
      <div class="media-content" style="min-height:100px;">
        <p class="title is-5">{{$student->name}}</p>
        <p class="subtitle is-6">{{$student->profession}} at {{$student->organization}}</p>
      </div>
    </div>


  </div>
  <footer class="card-footer">
    <a href="{{route('showStudent',['id'=>$student->id])}}" class="card-footer-item">Show Details</a>
 
  
  </footer>
</div>
        @endforeach

    </div>
    @endforeach
    </div>
</section>


</x-visitor-layout>