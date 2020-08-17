<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'score','ad_id',"buyer_id","seller_id"
    ];
}
