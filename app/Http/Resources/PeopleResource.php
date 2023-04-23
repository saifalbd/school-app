<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PeopleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'code'=>$this->code,
            'phone'=>$this->phone,
            'email'=>$this->email,
            'city'=>$this->city,
            'address'=>$this->address,
            'description'=>$this->description,
            'avatar'=>new AttachResource($this->avatar)
        ];
    }
}
