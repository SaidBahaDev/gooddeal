<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Assignation;
use App\Ad;
use Auth;
use Validator;

class AssignationController extends Controller
{
    public function index() { 
        $assignations = Assignation::all();

        foreach ($assignations as $assignation) {
            $assignation ->ad;
            $assignation ->buyer;
            $assignation ->seller;
        }
        return $assignations;    
   }

   public function show() { 
    $user = Auth::user();

    $assignations = Assignation::where(Auth::user()->role."_id",  Auth::user()->id)->get();
        foreach ($assignations as $assignation) {
            $assignation ->ad;
            $assignation ->buyer;
            $assignation ->seller;
        }
    return $assignations;
    }

    public function accept($id) {
        if (Auth::user()->role == "seller" || Auth::user()->role == "buyer") {
            if (Auth::user()->id != Assignation::find($id)->seller_id) {
                return response()->json(
                    [
                        'errors' => [
                            'status' => 403,
                            'message' => 'you dont own this assignation',
                        ]
                    ], 403
                );
            }
    }
        $Assignation = Assignation::find($id);
        $Assignation->state = 1;
        $Assignation->update();

        return response()->json($Assignation,200);
    }

    public function denie($id) {
        if (Auth::user()->role == "seller" || Auth::user()->role == "buyer") {
            if (Auth::user()->id != Assignation::find($id)->seller_id) {
                return response()->json(
                    [
                        'errors' => [
                            'status' => 403,
                            'message' => 'you dont own this assignation',
                        ]
                    ], 403
                );
            }
    }
        $Assignation = Assignation::find($id);
        $Assignation->state = 0;
        $Assignation->update();
        return response()->json($Assignation,200);
    }


    public function store(Request $request) {
        $valid = Validator::make($request->all(),[       
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

            $request["buyer_id"]= Auth::user()->id;
            $request["seller_id"]= Ad::where('id',  $ad_id)->first()->user_id;
            
            return Assignation::create($request->all());  
    } 
}
