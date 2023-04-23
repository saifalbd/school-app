<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'sku' => $this->sku,
            'minQty' => $this->min_qty,
            'qty' => $this->qty,
            'tax' => $this->tax,
            'discountType' => $this->discount_type,
            'discountValue' => $this->discount_value,
            'price' => $this->price,
            'status' => $this->status,

            'description' => $this->description,
            'unit' => new UnitResource($this->unit),
            'avatar' => new AttachResource($this->avatar),
            'category' => new CategoryResource($this->category),
            'subCategory' => new CategoryResource($this->subCategory),
            'brand' => $this->brand_id ? new BrandResource($this->brand) : null
        ];
    }
}
