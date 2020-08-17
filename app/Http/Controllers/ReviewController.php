<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Ad;
use App\Assignation;
use Auth;
use Validator;

class ReviewController extends Controller
{
    public function showByAd($id)
    {
        $reviews = Review::where("ad_id",$id)->get();
        if (count($reviews)) {
            $somme= 0;
            foreach ($reviews as $review) {
                $somme = $review->score + $somme;
            }
            return $somme/count($reviews);
        }
    }

    public function index()
    {
        return Review::all();
    }
 
    public function showByUser($id)
    {
        $reviews = Review::where("seller_id",$id)->get();
        if (count($reviews)) {
            $somme= 0;
            foreach ($reviews as $review) {
                $somme = $review->score + $somme;
            }
            return $somme/count($reviews);
        }
    }

    public function store(Request $request) {

        $valid = Validator::make($request->all(),[       
            'score'=>'required|integer|min:1|max:5',
            'ad_id'=>'required|integer'
        ]);
        if($valid->fails())
        {
            return response()->json(
            ['error'=>$valid->errors()],
            401
            );
        }

         $userId = Auth::id();
         $adId = $request["ad_id"];

         if (!Ad::where('id',  $adId)->where('state',  1)->first()) {
            return response()->json(
                [
                    'errors' => [
                        'status' => 404,
                        'message' => 'Ad not found',
                    ]
                ], 404
            );
        }

        if (!Assignation::where('ad_id',  $adId)->where('buyer_id',  $userId )->where('state',  1 )->where('reviewed',  0 )->first()) {
            return response()->json(
                [
                    'errors' => [
                        'status' => 403,
                        'message' => 'You didnt buy this service or product yet, or the owner didnt accept your request yet,or you already added a review',
                    ]
                ], 403
            );
        }
        $request['seller_id'] = Assignation::where('ad_id',  $adId)->where('buyer_id',  $userId )->where('state',  1 )->where('reviewed',  0 )->first()->seller_id;
        $request['buyer_id'] = Auth::id();

        Assignation::where('ad_id',  $adId)->where('buyer_id',  $userId )->where('state',  1 )->where('reviewed',  0 )->update(['reviewed' => 1]);
        
        return Review::create($request->all()); 
   } 

}
