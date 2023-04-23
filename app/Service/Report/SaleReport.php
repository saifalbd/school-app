<?php

namespace App\Service\Report;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;

class SaleReport {
    
    public function report(){

        $items = OrderItem::query()->whereHas('order',fn($q)=>$q->sales())->get();

        $products = Product::query()->select("id","name","avatar_id","category_id","sub_category_id","brand_id","unit_id",'qty')
        ->whereIn('id',$items->pluck('product_id')->unique()->toArray())
        ->with(["avatar","category","brand","unit"])
        ->get();
     

        $collection = $items->groupBy('product_id')->map(function($items,$product_id)use($products){
            $qty = $items->sum('qty');
            $amount = $items->sum('amount');
            $net_cost = $items->sum('net_cost');
            $product = $products->where('id',$product_id)->first();
            return compact('qty','amount','net_cost','product');

        })->values();

        return $collection;
    }
}
