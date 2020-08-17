<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategoriesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(AdsTableSeeder::class);
        $this->call(MessagesTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
        $this->call(AssignationsTableSeeder::class);
    }
}
