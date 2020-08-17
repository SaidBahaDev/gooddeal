<?php

use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;
use App\Message;
use App\Category;
use App\Assignation;
use App\Ad;
use App\User;
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


// USERS AUTH
Route::group(['prefix' => 'auth'], function () {
    Route::get('testLogin','AuthController@testlogin')->middleware('auth:api');
    Route::post('register','AuthController@register');
    Route::post('login','AuthController@login');
    Route::get('logout','AuthController@logout')->middleware('auth:api');
});

// ADS
Route::get('ads', 'AdController@index');
Route::get('ads/{ad}', 'AdController@show');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('myAds/{id}', 'AdController@showByUser')->middleware('scope:seller');
    Route::get('AllAds', 'AdController@AllAds')->middleware('scope:super-admin,admin');
    Route::post('ads', 'AdController@store')->middleware('scope:super-admin,admin,seller');
    Route::put('ads/{ad}', 'AdController@update')->middleware('scope:super-admin,admin,seller' , 'can:edit-or-disable-ad,ad');
    Route::put('ads_disable/{ad}', 'AdController@disable')->middleware('scope:super-admin,admin,seller', 'can:edit-or-disable-ad,ad');
    Route::put('ads_enable/{ad}', 'AdController@enable')->middleware('scope:super-admin,admin');
});

//USERS
Route::get('users/{user}', 'UserController@show');
Route::post('users', 'UserController@store')->middleware('auth:api' , 'scope:super-admin,admin');
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('users', 'UserController@index')->middleware('scope:super-admin,admin');
    Route::get('sellers', 'UserController@sellers')->middleware('scope:super-admin,admin');
    Route::put('users/{user}', 'UserController@update')->middleware('can:edit-user,user');
    Route::put('users_disable/{user}', 'UserController@disable')->middleware('scope:super-admin,admin','can:edit-user,user');
    Route::put('users_enable/{user}', 'UserController@enable')->middleware('scope:super-admin,admin','can:edit-user,user');
});

// MESSAGES
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('messages', 'messageController@store');
    Route::get('messages', 'messageController@index');
    Route::get('messages/{id}', 'messageController@show');
});

// CATEGORIES
Route::get('categories', 'categoryController@index');
Route::get('categories/{id}', 'categoryController@show');

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('categories', 'categoryController@store')->middleware('scope:super-admin');
    Route::put('categories/{id}', 'categoryController@update')->middleware('scope:super-admin');
    Route::delete('categories/{id}', 'categoryController@delete')->middleware('scope:super-admin');
});


//ASSIGNATIONS

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('assignations', 'assignationController@store')->middleware('scope:buyer');
    Route::get('assignations', 'assignationController@index')->middleware('scope:super-admin,admin');
    Route::get('myassignations', 'assignationController@show')->middleware('scope:seller,buyer');
    Route::put('acceptassignation/{id}', 'assignationController@accept')->middleware('scope:super-admin,admin,seller');;
    Route::put('denieassignation/{id}', 'assignationController@denie')->middleware('scope:super-admin,admin,seller');
});


//REVIEW
Route::get('ad_reviews/{id}', 'ReviewController@showByAd');
Route::get('user_reviews/{id}', 'ReviewController@showByUser');
Route::get('reviews', 'ReviewController@index');
Route::group(['middleware' => 'auth:api'], function () {
    Route::put('reviews', 'ReviewController@update')->middleware('scope:super-admin,admin');
    Route::post('reviews', 'ReviewController@store')->middleware('scope:buyer');
});



