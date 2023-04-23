<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
        <script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>

        <title>Alumni Association of Munshirhat High School</title>
        <link rel="stylesheet" href="{{ asset('css/main.css') }}" />

        @routes
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
   
</html>
