<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseEditResource extends JsonResource
{

    public function products(){
        $items = $this->items;
        return $items->map(function($item){
            $p = $item->product;
            $amount = $item->amount;
            $taxPercent =round((100/$item->issue_amount)*($item->tax));
            $discPer = (100/$item->issue_amount) * $item->discount;
            return [
                'id'=>$p->id,
                'text'=>$p->name,
            'qty'=>$item->qty,
                'issue_amount'=>$item->issue_amount,
                'rate'=>$item->rate,
                'unitCost'=>$amount/$item->qty,
                'unitName'=>$p->unit->name,
                'discount'=>$item->discount,
                'discountPercent'=>$discPer,
                'tax'=>$taxPercent,
                'intialTaxAmount'=>$item->tax,
                'subtotal'=>$amount,
                'img'=>$p->avatar->smUrl,
            ];
        });

        

    }
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
            'supplier_id'=>$this->party_id,
            'tax'=>$this->tax,
            'discount'=>$this->discount,
            'shipping'=>$this->shipping,
            'date'=>$this->date,
            'status'=>$this->status,
            'items'=>$this->products()
         
        ];
    }
}
