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

class DummyPayload 
{
    public $raw_body;
    public function __construct()
    {
        $this->raw_body = json_encode(
            array(
                array("country","2018-09-01","2018-09-02"),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("United Kingdom", 1112, 1334),
                array("China", 1435, 3384),
                array("United States", 1433, 5359),
                array("Total", 1232, 13343)
            )
        );
    }
};

class getData
{
    public function __invoke($payload)
    {
        return new \App\Services\DummyPayload;
        // Unirest\Request::verifyPeer(false);
        // return Unirest\Request::get($payload);
    }
}

class decodeJson
{
    public function __invoke($payload)
    {
        return json_decode($payload->raw_body, true);
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