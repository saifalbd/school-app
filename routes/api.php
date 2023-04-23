<?php

use App\Http\Controllers\Admin\BannarController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\AuthController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login',[AuthController::class,'login'])->name('login');
Route::post('/register',[AuthController::class,'register'])->name('register');

Route::middleware('auth:sanctum')->group( function () {
    /*----------START SETTING -----*/

    /*----------END SETTING -----*/
 

   Route::apiResource('/students',StudentController::class)->names('student');
  // Route::post('/students/{student}',[StudentController::class,'update'])->name('student.update');
   Route::apiResource('/bannars',BannarController::class)->names('bannar');

  

});
