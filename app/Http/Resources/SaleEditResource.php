<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SaleEditResource extends JsonResource
{


    public function products(){
       $items = $this->items;
       return $items->map(function($item){
        $qty = $item->qty;
        $p = $item->product;
        $price = $p->price;
        $discountAmount = ($p->discount_type == 'percentage'?$price/100*$p->discount_value:$p->discount_value);
        $tax = $p->tax;

        $taxAmount = ($price-$discountAmount)/100*$tax;
        return [
            'id'=>$p->id,
            'name'=>$p->name,
            'price'=>$price,
            'qty'=>$qty,
            'unitCost'=>$item->net_cost/$qty,
            'initialDiscountAmount'=>$discountAmount,
            'discountAmount'=>$discountAmount*$qty,
            'tax'=>$tax,
            'taxAmount'=>$taxAmount*$qty,
            'intialTaxAmount'=>$taxAmount,
            'unitName'=>$p->unit->name,
            'img'=>$p->avatar->smUrl,
            'subtotal'=>$price+($tax*$qty)-($discountAmount*$qty)
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
            'customer_id'=>$this->party_id,
            'tax'=>$this->tax,
            'discount'=>$this->discount,
            'shipping'=>$this->shipping,
            'date'=>$this->date,
            'status'=>$this->status,
            'items'=>$this->products()
        ];
    }
}
