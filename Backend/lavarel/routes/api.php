<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/login','LoginController@login');

Route::post('/user/detail','LoginController@detail');

Route::post('/user/create','LoginController@createUser');

Route::post('/user/uploadFile','UpLoadImageController@uploadFile');

Route::get('/listStatus','User\StatusController@index');

Route::post('/status/add','User\StatusController@createStatus');

Route::post('/like','likeController@likeStatus');

Route::get('/listLike','likeController@index');

Route::post('/status/listPeopleLike','LikeController@listPeopleLike');




//Route::get('/index','FacebookController@index');
