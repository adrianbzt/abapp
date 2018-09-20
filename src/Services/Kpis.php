<?php

namespace App\Services;

use League\Pipeline\Pipeline;
use Unirest;

class Kpis 
{
    public function getKpi($url)
    {
        $pipeline = (new Pipeline)
            ->pipe(new getData)
            ->pipe(new decodeJson)
            ->pipe(new removeTotal)
            ->pipe(new encodeJson);

        return $pipeline->process($url);
    }
};

class getData
{
    public function __invoke($payload)
    {
        return Unirest\Request::get($payload);
    }
}

class decodeJson
{
    public function __invoke($payload)
    {
        return json_decode($payload, true);
    }
}

class removeTotal 
{
    public function __invoke($payload)
    {
        unset($payload[count($payload) - 1]);

        return $payload;
    }
}

class encodeJson
{
    public function __invoke($payload)
    {
        return json_encode($payload);
    }
}