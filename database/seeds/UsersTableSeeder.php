<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        // Let's clear the users table first
        User::truncate();

        $faker = \Faker\Factory::create();

        // Let's make sure everyone has the same password and 
        // let's hash it before the loop, or else our seeder 
        // will be too slow.
        $password = Hash::make('test');

        User::create([
                'first_name' => 'super',
                'last_name' => 'admin',
                'company_name' => $faker->catchPhrase,
                'company_number' => $faker->ean8,
                'website' => $faker->domainName,
                'address' => $faker->address,
                'phone' => $faker->phoneNumber,
                'linkedin_link' => $faker->safeEmailDomain,
                'facebook_link' => $faker->safeEmailDomain,
                'email' => 'super-admin@gmail.com',
                'password' => $password,
                'state' => 1,
                'role' => 'super-admin',
        ]);

        // And now let's generate a few dozen users for our app:
        for ($i = 0; $i < 5; $i++) {
            User::create([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'company_name' => $faker->catchPhrase,
                'company_number' => $faker->ean8,
                'website' => $faker->domainName,
                'address' => $faker->address,
                'phone' => $faker->phoneNumber,
                'linkedin_link' => $faker->safeEmailDomain,
                'facebook_link' => $faker->safeEmailDomain,
                'email' => "buyer".$i."@gmail.com",
                'password' => $password,
                'state' =>1,
                'role' => 'buyer'
            ]);
        }

        for ($i = 0; $i < 5; $i++) {
            User::create([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'company_name' => $faker->catchPhrase,
                'company_number' => $faker->ean8,
                'website' => $faker->domainName,
                'address' => $faker->address,
                'phone' => $faker->phoneNumber,
                'linkedin_link' => $faker->safeEmailDomain,
                'facebook_link' => $faker->safeEmailDomain,
                'email' => "seller".$i."@gmail.com",
                'password' => $password,
                'state' =>1,
                'role' => 'seller'
            ]);   
        }

        for ($i = 0; $i < 5; $i++) {
            User::create([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'company_name' => $faker->catchPhrase,
                'company_number' => $faker->ean8,
                'website' => $faker->domainName,
                'address' => $faker->address,
                'phone' => $faker->phoneNumber,
                'linkedin_link' => $faker->safeEmailDomain,
                'facebook_link' => $faker->safeEmailDomain,
                'email' => "admin".$i."@gmail.com",
                'password' => $password,
                'state' =>1,
                'role' => 'admin'
            ]);   
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
