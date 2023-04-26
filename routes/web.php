<?php

use App\Http\Controllers\Admin\StudentController;
use App\Http\Resources\PurchaseEditResource;
use App\Models\Order;
use App\Models\Sale;
use App\Service\Report\SaleReport;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Visitor\HomeController as VisitorHomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/',[VisitorHomeController::class,'index'])->name('vistorHome');
Route::get('/students/{id}',[VisitorHomeController::class,'show'])->name('showStudent');
Route::get('/members',[VisitorHomeController::class,'members'])->name('members');
Route::view('/contacts','visitor.contact')->name('contacts');
Route::view('/add-me','visitor.addPage')->name('addMe');
Route::post('/add-me',[StudentController::class,'store'])->name('addMe.store');

Route::get('check',function(){
    $sale = new SaleReport;
    return $sale->report();
});

Route::get('/admin/{any?}', function () {
    return view('welcome');
})->where('any', '[\/\w\.-]*');




