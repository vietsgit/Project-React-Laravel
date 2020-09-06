<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Viet',
            'gender' => 'Nam',
            'birthday' => '24/02/2000',
            'image' => 'storage/public/IMG_20200729_214301.jpg',
            'username' => 'admin',
            'password' => Hash::make('admin'),
            'route' => 'Admin',
        ]);

        
            DB::table('users')->insert([
                'name' => 'Vieet',
                'gender' => 'Nu',
                'birthday' => '15/12/2017',
                'image' => 'storage/public/FB_IMG_1581566031239.jpg',
                'username' => 'user',
                'password' => Hash::make('user'),
                'route' => 'User',
            ]);
        
    }
}
