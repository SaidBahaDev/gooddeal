<?php

use Illuminate\Database\Seeder;
use App\Ad;

class AdsTableSeeder extends Seeder
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
         Ad::truncate();

         $faker = \Faker\Factory::create();
 
         // And now, let's create a few articles in our database:
         for ($i = 0; $i < 20; $i++) {
             Ad::create([
                'title' => $faker->sentence($nbWords = 4, $variableNbWords = true),
                'description' => $faker->paragraph($nbSentences = 20, $variableNbSentences = true) ,
                'location' => $faker->city,
                'budget' => $faker->numberBetween(100,900),
                'estimated_time' => $faker->numberBetween(1,30),
                'image' => "https://picsum.photos/id/".($i+10)."/300/300",
                'price' => $faker-> randomFloat($nbMaxDecimals = 2, $min = 100, $max = 900),
                'type' => $faker->randomElement(['produit','service']),
                'category_id' =>  $faker->numberBetween(1,7),
                'user_id' =>  $faker->numberBetween(7,11),
                'state' =>  1,
             ]);
         }
         DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
