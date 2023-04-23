<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'amount'=>['required','numeric'],
            'issueAmount'=>['required','numeric'],
            'customer'=>['required','numeric'],
            'discount'=>['required','numeric'],
            'shipping'=>['required','numeric'],
            'tax'=>['required','numeric'],
            'date'=>['required','date'],
            'status'=>['required','string'],
            'items'=>['required','array'],
            'items.*'=>['required','array'],
            'items.*.id'=>['required','numeric'],
            'items.*.qty'=>['required','numeric'],
            'items.*.rate'=>['required','numeric'],
            'items.*.cost'=>['required','numeric'],
            'items.*.tax'=>['required','numeric'],
            'items.*.discount'=>['required','numeric'],
            'items.*.issueAmount'=>['required','numeric'],
            'items.*.amount'=>['required','numeric'],
        ];
    }
}
