<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            'date'=>$this->date,
            'amount'=>$this->amount,
            'ledger_id'=>$this->ledger_id,
            'status'=>$this->status,
            'ledgerName'=>$this->ledger->name,
            'reference'=>$this->reference,
            'description'=>$this->description,
        ];
    }
}
