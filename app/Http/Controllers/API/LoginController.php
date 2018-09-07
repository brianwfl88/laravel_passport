<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;

class LoginController extends Controller
{
    public function login(Request $request)
    {
	    $client = DB::table('oauth_clients')
	        ->where('password_client', true)
	        ->first();

	    $data = [
	        'grant_type' => 'password',
	        'client_id' => $client->id,
	        'client_secret' => $client->secret,
	        'username' => $request->username,
	        'password' => $request->password,
	    ];

	    $token_request = Request::create('/oauth/token', 'POST', $data);

	    return app()->handle($token_request);
    }

    public function logout()
    {
	    $accessToken = auth()->user()->token();

	    $refreshToken = DB::table('oauth_refresh_tokens')
	        ->where('access_token_id', $accessToken->id)
	        ->update([
	            'revoked' => true
	        ]);

	    $accessToken->revoke();

	    return response()->json(['status' => 200]);
    }
}
