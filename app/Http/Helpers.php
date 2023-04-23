<?php


if (!function_exists('is_bd_phone')) {
    function is_bd_phone($num)
    {
        return preg_match('/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/', $num);
    }
}