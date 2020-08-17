<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Validator;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function sellers()
    {
        $users = User::where("role", "seller")->get();
        return $users;
    }

    public function show(User $user)
    {
        return $user;
    }

    public function store(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'first_name' => 'required|string|min:3|max:50',
            'last_name' => 'required|string|min:3|max:50',
            'company_name' => 'string|min:3|max:50|nullable',
            'company_number' => 'numeric|digits_between:3,9|nullable',
            'website' => 'string|min:3|max:50|nullable',
            'address' => 'string|min:3|max:100|nullable',
            'phone' => 'string|min:3|max:50|nullable',
            'linkedin_link' => 'string|min:3|max:50|nullable',
            'facebook_link' => 'string|min:3|max:50|nullable',
            'email' => 'string | email | unique:users',
            'password' => 'required|string|confirmed',
            'state' => 'boolean|nullable',
            'role' => ($request->user()->role =="super-admin") ? 'required|in:seller,buyer,admin' : 'required|in:seller,buyer'
        ]);

        if ($valid->fails()) {
            return response()->json(
                ['error' => $valid->errors()],
                401
            );
        }

        $request["password"] = bcrypt($request->password);
        $request["state"] = 0;

          return User::create($request->all());
    }

    public function update(Request $request, User $user)
    {
        $valid = Validator::make($request->all(), [
            'first_name' => 'string|min:3|max:50',
            'last_name' => 'string|min:3|max:50',
            'company_name' => 'string|min:3|max:50|nullable',
            'company_number' => 'digits_between:3,9|nullable',
            'website' => 'string|min:3|max:50|nullable',
            'address' => 'string|min:3|max:100|nullable',
            'phone' => 'string|min:3|max:50|nullable',
            'linkedin_link' => 'string|min:3|max:50|nullable',
            'facebook_link' => 'string|min:3|max:50|nullable',
            'email' => 'string | email',
            'role' => 'in:seller,buyer'
        ]);

        if($valid->fails())
        {
            return response()->json(
            ['error'=>$valid->errors()],
            401
            );
        }else{
            $user->update($request->all());
            return response()->json($user, 200);
        }

    }

    public function disable(Request $request, User $user)
    {
        $user->state = 0;
        $user->save();
        return $user;
    }

    public function enable(Request $request, User $user)
    {
        $user->state = 1;
        $user->save();
        return $user;
    }

}
