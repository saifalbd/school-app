<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Alumni Association of Munshirhat High School</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/74128a2830.js" crossorigin="anonymous"></script>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('visitor/css/app.css') }}">

    <!-- Scripts -->
    <script src="{{ asset('visitor/js/app.js') }}" defer></script>
    <style>
    .main{
    background-image: url('./bg/page.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
        }
    </style>
</head>

<body class="{{$page}}">
    <header>
        <nav class="small">
            <div class="logo-box">
                <img src="{{asset('images/logo.png')}}" alt="" srcset="">
            </div>
            <ul class="menus">
                <li class="is-hidden-mobile"><a href="{{route('vistorHome')}}">Home</a></li>
                <li><a href="{{route('members')}}">Members</a></li>
                <li><a href="{{route('addMe')}}">Add Me</a></li>
                <li><a href="{{route('contacts')}}">Contact Us</a></li>
            </ul>
        </nav>
  
    </header>
    <main class="mainx">
       {{$slot}}

    </main>
    @include('visitor.layouts.footer')
</body>

</html>