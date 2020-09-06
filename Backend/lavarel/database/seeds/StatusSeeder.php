<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for($i = 0; $i< 5; $i++){
            DB::table('statuses')->insert([
                'user_id' => $faker->numberBetween($min = 1, $max = 2),
                'image' => 'storage/public/IMG_20200806_144630.jpg',
                'content' => $faker->text
            ]);
        }

    }
}
