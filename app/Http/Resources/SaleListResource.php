<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SaleListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $due = $this->amount-$this->pay;
        return [
            'id'=>$this->id,
            'reference'=>$this->reference,
            'date'=>$this->date,
            'amount'=>$this->amount,
            'status'=>$this->status,
            'qty'=>$this->qty,
            'tax'=>$this->tax,
            'discount'=>$this->discount,
            'shipping'=>$this->shipping,
            'pay'=>$this->pay,
            'due'=>$due,
            'payStatus'=>$due?'Due':'Paid',
            'customer'=>new PeopleResource($this->party),
            'biller'=>$this->biller,
        ];
    }
}
