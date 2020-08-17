<?php

use Illuminate\Database\Seeder;
use App\Assignation;


class AssignationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
         // Let's truncate our existing records to start from scratch.
         Assignation::truncate();

         $faker = \Faker\Factory::create();
 
         // And now, let's create a few articles in our database:
         for ($i = 0; $i < 40; $i++) {
            Assignation::create([
                'ad_id' => $faker->numberBetween(1,20),
                'buyer_id' => $faker->numberBetween(1,6),
                'seller_id' => $faker->numberBetween(6,11),
                'state' => NULL,
             ]);
         }

         DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
