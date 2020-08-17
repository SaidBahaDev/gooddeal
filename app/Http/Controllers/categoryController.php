<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Validator;
class CategoryController extends Controller
{
   public function index() { 
        return Category::all();
   }    
   
   public function show($id) {
        return Category::find($id); 
   }
   
   public function store(Request $request) {
        $valid = Validator::make($request->all(),[       
            'name'=>'required|string|min:2'
        ]);
        if($valid->fails())
        {
            return response()->json(
            ['error'=>$valid->errors()],
            401
            );
        }
        return Category::create($request->all()); 
   } 

   public function update(Request $request, $id) { 
       $category = Category::findOrFail($id); 
       $category->update($request->all()); 
       return $request->user()->id;
   } 
   
   public function delete(Request $request, $id) {
            $category = Category::findOrFail($id); $category->delete(); 
            return 204; 
   } 
}
