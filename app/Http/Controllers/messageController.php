<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use App\Ad;
use Auth;
use Validator;
class MessageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $user = Auth::user();
        $messages = Message::where(Auth::user()->role."_id",  Auth::user()->id)->get();
        foreach ( $messages as $message) {
            
            $message->ad;
            $message->buyer;
            $message->seller;
            
        }
        return $messages;

    }

    public function show($id)
    {
        $user = Auth::user();   //-> where("buyer_id", $id)
        $messages = Message::where(Auth::user()->role."_id",  Auth::user()->id)->
                             where("buyer_id", $id)
                             ->get();

        foreach ( $messages as $message) {
            $message->ad;
            $message->buyer;
            $message->seller;
        }
        return $messages;

    }

    public function store(Request $request) {
        $valid = Validator::make($request->all(),[       
            'message'=>'required|string|min:2',
            'ad_id'=>'required|numeric',
            'buyer_id'=>'required|numeric'
        ]);

        if($valid->fails())
        {
            return response()->json(
            ['error'=>$valid->errors()],
            401
            );
        }
        $ad_id = $request->ad_id;
        // verify if the ad exist and the state is active
        if (!Ad::where('id',  $ad_id)->where('state', 1)->first()) {
            return response()->json(
                [
                    'errors' => [
                        'status' => 404,
                        'message' => 'Ad Not Found',
                    ]
                ], 404
            );
        }


        if ($request->user()->role =="buyer") {

            $request["buyer_id"]= Auth::user()->id;
            $request["sender_id"]= Auth::user()->id;
            $request["seller_id"]= Ad::where('id',  $ad_id)->first()->user_id;
            
            return message::create($request->all());
          
        }

        if ( Auth::user()->role =="seller") {
            // verify if the seller is the owner of the ad
            if (!Ad::where('id',  $ad_id)->where('user_id',  Auth::user()->id)->first()) {
                return response()->json(
                    [
                        'errors' => [
                            'status' => 403,
                            'message' => 'You ARE NOT THE OWNER OF THE AD',
                        ]
                    ], 403
                );
            }
            // verify if the seller has already received a message from the buyer
            if (!Message::where('ad_id',  $ad_id)->where('buyer_id', $request->buyer_id)->first()) {
                return response()->json(
                    [
                        'errors' => [
                            'status' => 403,
                            'message' => 'you didnt receive a message from the buyer yet',
                        ]
                    ], 403
                );
            }
            $request["seller_id"]= Auth::user()->id;
            $request["sender_id"]= Auth::user()->id;
            return message::create($request->all()); 
        }
        
       
    } 
    
    
}
