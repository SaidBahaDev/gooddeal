<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ad;
use Validator;

class AdController extends Controller
{
    public function index()
    {
        $ads = Ad::orderBy('created_at','desc')->where("state",  1 )->get();
        foreach ( $ads as $ad) {
            $ad["description"] = substr($ad["description"], 0, 150);
            $ad->user;
            $ad->category;
        }
        return $ads;
    }

    public function allAds()
    {
        $ads = ad::all();
        foreach ( $ads as $ad) {
            $ad->user;
            $ad->category;
        }
        return $ads;
    }
 
    public function show(Ad $ad)
    {
        $ad->user;
        $ad->category;
        return $ad;
    }

    public function showByUser($id)
    {
        $ads = Ad::where("user_id",  $id)->where("state",  1 || NULL )->orderBy('created_at','desc')->get();
        foreach ($ads as $ad) {
            $ad->user;
            $ad->category;
        }
        return $ads;
    }

    public function store(Request $request)
    {
        $valid = Validator::make($request->all(),[       
            'title'=>'required|string|min:3|max:255',
            'description'=>'required|string|min:3',
            'location'=>'string|min:3|nullable',
            'budget'=>'numeric|nullable',
            'estimated_time'=>'nullable|numeric',
            'image'=>'nullable|string|min:3|',
            'price'=>'required|numeric',
            'type'=>'required|in:produit,service',
            'category_id'=>'required|numeric',
            'user_id'=>'required|numeric',
        ]);
        if($valid->fails())
        {
            return response()->json(
            ['error'=>$valid->errors()],
            401
            );
        }
        // si l'usager est un seller alors on met user_id avec son id
        if ($request->user()->role =="seller") {
            $request["user_id"] = $request->user()->id;
        }
        return Ad::create($request->all()); 
    }

    public function update(Request $request, Ad $ad)
    {
        $valid = Validator::make($request->all(),[       
            'title'=>'required|string|min:3|max:255',
            'description'=>'required|string|min:3',
            'location'=>'string|min:3|nullable',
            'budget'=>'numeric|nullable',
            'estimated_time'=>'nullable|numeric',
            'image'=>'nullable|string|min:3|',
            'price'=>'required|numeric',
            'type'=>'required|in:produit,service',
            'category_id'=>'required|numeric',
            'user_id'=>'required|numeric',
        ]);
        if($valid->fails())
        {
            return response()->json(
            ['error'=>$valid->errors()],
            401
            );
        }else{
            $ad->update($request->all());
            return response()->json($ad, 200);
        }
       
    }

    public function disable(Request $request, Ad $ad)
    {
        $ad->state = 0;
        $ad->update();
        return response()->json($ad, 200);
    }

    public function enable(Request $request, Ad $ad)
    {
        $ad->state = 1;
        $ad->update();
        return response()->json($ad, 200);
    }


}
