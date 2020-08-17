<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesTableSeeder extends Seeder
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
       Category::truncate();

       $faker = \Faker\Factory::create();

       $categories = [
        'Acheter et vendre','Autos et véhicules','Immobilier','Services','Animaux','Locations de vacances','Communauté'
       ];

       // And now, let's create a few articles in our database:
       for ($i = 0; $i < 7; $i++) {
        Category::create([
               'name' => $categories[$i]
           ]);
       }

       DB::statement('SET FOREIGN_KEY_CHECKS=1;');

    }
}
