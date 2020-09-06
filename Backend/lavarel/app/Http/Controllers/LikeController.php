<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \Firebase\JWT\JWT;
use App\Like;

class LikeController extends Controller
{
    function index(){
        $Listlike = DB::table('likes')
                     ->select(DB::raw('count(*) as numberLike, status_id'))
                     ->groupBy('status_id')
                     ->get();
    
        return response()->json($Listlike, 200);
    }

    function likeStatus(Request $request){
        $id = $request->input('user_id');
		$key = "under lockdown";
        $user_id = JWT::decode($id, $key, array('HS256'));
        $status_id = $request->input('status_id');

        $LikeStatus = Like::where('user_id',$user_id)
                                ->where('status_id',$status_id)
                                ->first();
        
        if($LikeStatus != null){
        $LikeStatus->delete();
        }else{
        $likeNew = new Like;
        $likeNew->user_id = $user_id;
        $likeNew->status_id  = $status_id;
        $likeNew->save();
        }
        return  $this->index();
    }

    function listPeopleLike(){
        $id = request()->header("Authorization");
        $data = DB::table('likes')  ->where('status_id',$id)
                                    ->join('users', 'likes.user_id', '=', 'users.id')
                                    ->select('users.name', 'users.avatar' )
                                    ->orderBy('likes.created_at', 'desc')
                                    ->get();
        return response()->json($data, 200);
    }


}
