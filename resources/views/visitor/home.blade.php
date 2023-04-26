
<x-visitor-layout page="home-page">

    <div class="splide" aria-labelledby="carousel-heading">
        <div class="splide__track">
            <ul class="splide__list">

            @foreach($bannars as $bannar)

                <li class="splide__slide">
                    <img src="{{$bannar->image->url}}" alt="" srcset="">
                    <div class="info-box">
                        <div class="container">
                            <div class="slider-text slider-text-animation">
                                <h1>{{$bannar->title}}</h1>
                                @if($bannar->message)
                                <div class="slider-info">
                                    <p>{{$bannar->message}}</p>
                                </div>
                                @endif
                                <!-- <a href="courses-grid.html" class="button">Start A Course</a> -->
                            </div>
                        </div>
                    </div>
                </li>
                @endforeach
              
             


            </ul>

        </div>
    </div>
    <!-- <div class="vistion-box">
        <div class="vision-box-inner">
            <div class="box">
                <div class="campus-box" style="background-image:url('{{asset('images/campus.jpg')}}')">
                 <div class="inner">
                 <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13,15.5V13H7V15.5L3.5,12L7,8.5V11H13V8.5L16.5,12M18,9.5V6A1,1 0 0,0 17,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H17A1,1 0 0,0 18,18V14.5L22,18.5V5.5L18,9.5Z" />
                    </svg>
                    <div class="campus-text"> See Video in Our Campus </div>
                 </div>
                </div>
                <div class="tab-wrapper" id="tabWrapper">
                    <ul class="tabs">
                        <li class="active">About Us</li>
                        <li>Vission</li>
                        <li>Mission</li>
                    </ul>
                    <ul class="tab-contains">
                        <li class="active">
                            <p>
                               1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odio ut alias quae laudantium quod ipsum facere consequuntur vel aliquid fugit aut excepturi ipsam ad deleniti, nulla nihil tempore rerum.
                            </p>
                        </li>
                        <li>
                            <p>
                               2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odio ut alias quae laudantium quod ipsum facere consequuntur vel aliquid fugit aut excepturi ipsam ad deleniti, nulla nihil tempore rerum.
                            </p>
                        </li>
                        <li>
                            <p>
                               3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odio ut alias quae laudantium quod ipsum facere consequuntur vel aliquid fugit aut excepturi ipsam ad deleniti, nulla nihil tempore rerum.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> -->

    <section class="container" style="padding-top:50px;">
        <div class="section-title">
            <div class="title-box">
                <span>Past students</span>
                <span>
                    @foreach (collect()->times(12) as $item)
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.83 11A3 3 0 0 0 15.18 11H8.82A3 3 0 0 0 3.17 11H1V13H3.17A3 3 0 0 0 8.82 13H15.18A3 3 0 0 0 20.83 13H23V11M6 13A1 1 0 1 1 7 12A1 1 0 0 1 6 13M18 13A1 1 0 1 1 19 12A1 1 0 0 1 18 13Z" />
                    </svg>
                    @endforeach

                </span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium possimus repellat eligendi fugit magnam veritatis incidunt in ea, eveniet voluptatibus qui dolorum earum ab. Voluptates doloremque incidunt beatae sed.</p>
        <div class="members">
            @foreach ($items as $key=>$collection)
            <div class="title">Student {{$key}}</div>
            <div class="collection">
                @foreach ($collection as $student)
                <div class="card-box">
                    <div class="m-card">
                        <div class="image-box">
                            <img src="{{$student->avatar->url}}" alt="" srcset="">
                        </div>
                        <div class="info-box">
                            <!-- <div class="title">{{$student->name}}</div>
                            <div class="info">@ {{$student->profession}}</div> -->
                            <p class="title is-5"><a href="{{route('showStudent',['id'=>$student->id])}}">{{$student->name}}</a></p>
        <p class="subtitle is-6">@<?= $student->profession ?> at <?= $student->organization ?></p>
               
      
                        </div>
                       
                    </div>
                </div>
                @endforeach

            </div>
            @endforeach
            <div class="see-all-box">
                <a class="button is-rounded" href="{{route('members')}}">
                    SEE ALL
                </a>
            </div>
        </div>
    </section>

</x-visitor-layout>