<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Assignation extends Model
{
    protected $fillable = ['seller_id',"buyer_id","ad_id","state"];

    public function Ad()
    {
        return $this->belongsTo('App\Ad')->select(array('id', 'title'));        

    }

    public function seller()
    {
        return $this->belongsTo('App\User','seller_id')->select(array('id', 'first_name','last_name'));        

    }

    public function buyer()
    {
        return $this->belongsTo('App\User','buyer_id')->select(array('id', 'first_name','last_name'));          

    }
}

