<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::tokensCan([
            'super-admin' => 'super-admin',
            'admin' => 'admin',
            'seller' => 'seller',
            'buyer' => 'buyer',
        ]);

        
        Gate::define('edit-or-disable-ad', function ($user, \App\Ad $ad) {
            // Only super admin and admin , and Owner of ad can edit or delete ad 
            return $user->id == $ad->user_id | $user->role == "super-admin" | $user->role == "admin" ;
        });

        Gate::define('edit-user', function ($user, \App\User $us) {
            $valide = false;
            if ($user->id == $us->id  | $user->role == "super-admin" ) {
               $valide = true;
            }
            if( $user->role == "admin" && ($us->role == "seller" | $us->role == "buyer" )) {
                $valide = true;
            }
            return $valide;
        });

    }
}
