<?php

namespace App\Service;

use Illuminate\Support\Facades\Http;

class SMS
{

    public $toNumber;
    public $text;

    public function number($number): SMS
    {
        $this->toNumber = $number;
        return $this;
    }

    public function message($message)
    {
        $this->text = $message;
        return $this;
    }

    public function send()
    {
        $to = $this->toNumber;
        if (!is_bd_phone($to)) {
            return null;
        }
        $apiUrl = config('sms.api_url');
        if (!$apiUrl) {
            return null;
        }

        $message = $this->text;

        $token = config('sms.api_secret');
        $data = compact('message', 'token', 'to');

        $response = Http::get($apiUrl,$data);
    }
}
