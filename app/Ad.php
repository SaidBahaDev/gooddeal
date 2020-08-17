<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $fillable = ['title','description','location','budget','estimated_time','image','price','type','category_id','user_id'];
 
    public function user()
    {
        return $this->belongsTo('App\User')->select(array('id', 'first_name','last_name'));        

    }

    public function category()
    {
        return $this->belongsTo('App\Category')->select(array('id', 'name'));

    }



}
