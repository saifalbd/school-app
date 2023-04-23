<?php

namespace App\Service;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Department;
use App\Models\Designation;
use App\Models\Employee;
use App\Models\ExpenseLedger;
use App\Models\People;
use App\Models\Role;
use App\Models\Tag;
use App\Models\Team;
use App\Models\Unit;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

class Dropdown
{

   

 

  

    public function mixer(Collection $items){
        return $items->map(function($item){
            $text = $item->name;
            $id = $item->id;
            return compact('text','id');
        });
    }
    

    public function parentCategories(){
        return $this->mixer(Category::query()->select(['name','id'])->where('parent_id',null)->get());
    }
    public function subCategories(){
        return $this->mixer(Category::query()->select(['name','id'])->whereNot('parent_id',null)->get());
    }

    public function brands(){
        return $this->mixer(Brand::query()->select(['name','id'])->get());
    }

    public function units(){
        return $this->mixer(Unit::query()->select(['name','id'])->get());
    }

    public function customers(){
        return $this->mixer(People::query()->role('customer')->select(['name','id'])->get());
    }

    public function suppliers(){
        return $this->mixer(People::query()->role('supplier')->select(['name','id'])->get());
    }

    public function expenseLedgers(){
        return $this->mixer(ExpenseLedger::query()->select(['name','id'])->get());
    }



  

}
