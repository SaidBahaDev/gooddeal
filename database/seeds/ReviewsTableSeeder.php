<?php

use Illuminate\Database\Seeder;
use App\Review;

class ReviewsTableSeeder extends Seeder
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
         Review::truncate();

         $faker = \Faker\Factory::create();
 
         // And now, let's create a few articles in our database:
         for ($j=0; $j < 10; $j++) { 
            for ($i = 1; $i < 6; $i++) {
                Review::create([
                    'score' => $faker->numberBetween(1,5),
                    'buyer_id' => $i,
                    'seller_id' => $i+6,
                    'ad_id' => $faker->numberBetween(0,10),
                 ]);
             }    
         }
         
         DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
