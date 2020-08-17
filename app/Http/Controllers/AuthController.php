<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Validator;
use Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'first_name' => 'required|string|min:3|max:45',
            'last_name' => 'required|string|min:3|max:45',
            'company_name' => 'string|min:3|max:45|nullable',
            'company_number' => 'integer|min:3|nullable',
            'website' => 'string|min:3|max:45|nullable',
            'address' => 'string|min:3|max:45|nullable',
            'phone' => 'string|min:3|max:45|nullable',
            'linkedin_link' => 'string|min:3|max:45|nullable',
            'facebook_link' => 'string|min:3|max:45|nullable',
            'email' => 'string | email | unique:users',
            'password' => 'required|string|confirmed',
            'role' => 'required|in:seller,buyer'
        ]);

        if ($valid->fails()) {
            return response()->json(
                ['error' => $valid->errors()],
                401
            );
        }

        $request["password"] = bcrypt($request->password);
        $request["state"] = NULL;

        return User::create($request->all()); 
        
    }

    public function login(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if ($valid->fails()) {
            return response()->json(
                ['error' => $valid->errors()],
                401
            );
        }

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password, 'state' => 1])) {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'state' => NULL])) {
                return response()->json(
                    [
                        'error' => [
                            'status' => 403,
                            'message' => 'Votre inscription n\'a pas encore été approuvée',
                        ]
                    ], 403
                );
            }
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'state' => 0])) {
                return response()->json(
                    [
                        'error' => [
                            'status' => 403,
                            'message' => 'Votre compte est banni',
                        ]
                    ], 403
                );
            }
            return response()->json(
                [
                    'error' => [
                        'status' => 403,
                        'message' => 'Mot de passe ou email incorrect',
                    ]
                ], 403
            );
        }

        $user = $request->user();

        if ($user->role == "super-admin") {
            $tokenData = $user->createToken("personal Acces Token", ['super-admin']);
        }
        if ($user->role == "admin") {
            $tokenData = $user->createToken("personal Acces Token", ['admin']);
        }
        if ($user->role == "seller") {
            $tokenData = $user->createToken("personal Acces Token", ['seller']);
        }
        if ($user->role == "buyer") {
            $tokenData = $user->createToken("personal Acces Token", ['buyer']);
        }
        // $token = $tokenData->token;
        $token["Token"]= $tokenData;
        $token["user"] = $user;

        return  $token;
    }


    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => "logout successfully!",
            'status_code' => 200
        ],200);
    }
    public function testLogin(Request $request){
        return response()->json([
            'message' => "user is logedin!",
            'status_code' => 200
        ],200);
    }
}
