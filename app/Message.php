<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //
    protected $fillable = ['message','buyer_id','seller_id','ad_id','sender_id'];

    public function ad()
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

