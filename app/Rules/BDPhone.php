<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class BDPhone implements InvokableRule
{
      /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        if (!is_bd_phone($value)) {
            $fail('The :attribute must be bd phone number.');
        }
    }
}
