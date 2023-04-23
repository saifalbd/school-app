<?php

namespace App\Service;


use Illuminate\Support\Carbon;


class DateConvert
{

    public function day($num)
    {
        $bd = [
            'সোমবার',
            'মঙ্গলবার',
            'বুধবার',
            'বৃহস্পতিবার',
            'শুক্রবার',
            'শনিবার',
            'রবিবার',
        ];
        return $bd[$num];
    }

    public function month($num)
    {
        $bd = [
            'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
        ];
        return $bd[$num - 1];
    }

    public function number($num)
    {
        $bd  = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return  join(array_map(function ($item) use ($bd) {
            return $bd[$item];
        }, str_split($num)));
    }

    public function convert(Carbon $carbon, $showDay)
    {
        $day = $this->day($carbon->dayOfWeek);
        $date = $this->number($carbon->day);
        $month = $this->month($carbon->month);
        $year = $this->number($carbon->year);

        $dText = "$date $month $year";
        return $showDay ? "$day, $dText" : $dText;
    }
}
