<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use \Firebase\JWT\JWT;
use App\User;
use App\Http\Controllers\UpLoadImageController;

class LoginController extends Controller
{
    function login(Request $request){

        $key = "under lockdown";
        $username = $request->input('username');
		$password = $request->input('password');
        if (Auth::attempt(["username" => $username, "password" => $password])) {
            $user = Auth::user();
            $token = JWT::encode($user->id, $key);
            return response()->json($token, 200);
		} else {
            $data = array("data" => null);
			return response()->json($data, 400);
		}
    }

    function createUser(Request $request){
        $name = $request->input('name');
        $gender = $request->input('gender');
        $birthday = $request->input('birthday');

        $image = $request->input('image');
        if(is_null($image)){
            $image = "storage/public/FB_IMG_1581833275453.jpg";
        }else{
            $image = UpLoadImageController::uploadFile($image);
        }
        $username = $request->input('username');
        $password = $request->input('password');

        $user = User::all()->where('username',$username);
        if($user->count() < 1){
            $userNew = new User;
            $userNew->name = $name;
            $userNew->gender = $gender;
            $userNew->birthday = $birthday;
            $userNew->avatar = $image;
            $userNew->username = $username;
            $userNew->password = Hash::make($password);
            $userNew->route = "User";
            $userNew->save();

            $key = "under lockdown";
            $user = User::firstWhere('username','=',$username);
            $token = JWT::encode($user->id, $key);
            return response()->json($token, 200);
        }else{
            $data = array("data" => null);
			return response()->json($data, 400);
        }
    }

    function detail(){
        $token = request()->header("Authorization");
		$key = "under lockdown";
		$data = JWT::decode($token, $key, array('HS256'));
		$users = User::all();
		$user = $users->find($data);
		return response()->json($user, 200);
    }
}
