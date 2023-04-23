<?php

namespace App\Http\Controllers;

use App\Http\Resources\AttachResource;
use App\Http\Resources\AuthResource;
use App\Models\Attachment;
use App\Models\User;
use App\Rules\BDPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::query()->whereEmail($request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('token-name');
            $token = $token->plainTextToken;
         

            $item = (new AuthResource($user))->toArray($request);

            return response()->json(['user' => $item, 'token' => $token], 200);
        } else {
            return response()->json([
                'message' => __('auth.failed'),
                'errors' => [
                    'email' => [__('auth.failed')],
                    'password' => [__('auth.failed')],
                ]
            ], 422);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email',Rule::unique('users')],
            'name' => ['required', 'string'],
            'password' => ['required', 'string', 'confirmed'],
            'phone' => ['required', 'numeric', new BDPhone,Rule::unique('users')],
        ]);
        $password = Hash::make($request->password);
        $email = $request->email;
        $name = $request->name;
        $phone = $request->phone;
        $avatar_id = 1;
        $user =   User::create(compact('email', 'name', 'password', 'phone','avatar_id'));
        $item = new AuthResource($user);
        return response()->json($item);
    }

  

    public function uploadAvatar(Request $request)
    {

        if ($request->has('avatar')) {
            $request->validate(['avatar' => ['required', 'image']]);
            $avatar = $request->file('avatar');
            $img = Attachment::add($avatar, User::class);
            $avatar_id = $img->id;
        } else {
            $avatar = Attachment::query()->where('model', class_basename(User::class))->first();
            if ($avatar) {
                $avatar_id = $avatar->id;
            } else {
                $avatar_id = null;
            }

            $img = Attachment::find($avatar_id);
        }
        $user = $request->user();
        $user->update(compact('avatar_id'));
        $item = new AttachResource($img);
        return response()->json($item);
    }
    
}
