<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSalePurResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArrayOld($request)
    {
        $price = $this->price;
        $discountAmount = $this->discount_type == 'percentage'?$price/100*$this->discount_value:$this->discount_value;
        $tax = $this->tax;

        $taxAmount = ($price-$discountAmount)/100*$tax;
      
        return [
            'id'=>$this->id,
            'text'=>$this->name,
            'price'=>$price,
            'qty'=>1,
            'unit_cost'=>$this->unit_cost,
            'initialDiscountAmount'=>$discountAmount,
            'discountAmount'=>$discountAmount,
            'tax'=>$tax,
            'taxAmount'=>$taxAmount,
            'intialTaxAmount'=>$taxAmount,
            'unitName'=>$this->unit->name,
            'img'=>$this->avatar->smUrl,
            'subtotal'=>$price+$tax-$discountAmount
            
        ];
    }
    public function toArray($request)
    {
      
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'price'=>$this->price,
            'unitCost'=>$this->unit_cost,
            'discountType'=>$this->discount_type,
            'discountValue'=>$this->discount_value,
            'tax'=>$this->tax,
            'unitName'=>$this->unit->name,
            'img'=>$this->avatar->smUrl
        ];
    }
}
