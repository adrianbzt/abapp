<?php

namespace App\Controller;

use http\Env\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\MessageGenerator;
use App\Services\Kpis;


class MyController extends AbstractController {

    /**
     * @Route("/", name="home")
     */
    public function defaultIndex() {

        return $this->render(
            'base.html.twig',
            array('event' => array(
                'id' => 1,
                'title' => 'Hello, React and Symfony v2',
                'formattedPrice' => 4.99
            ))
        );
    }

    /**
     * @Route("/message", name="message")
     */
    public function Message(MessageGenerator $messageGenerator)
    {

        $message = $messageGenerator->getHappyMessage();
        return $this->render(
            'base.html.twig',
            array('event' => array(
                'id' => 1,
                'title' => $message,
                'formattedPrice' => $message
            ))
        );
    }

    /**
     * @Route("/kpi", name="kpi")
     */
    public function Kpi()
    {
        return (new Kpis)->getKpi("https://fbstat.mdc.gameloft.org/Odd/Api/Aria/gmd_beta.php?game=1036&kpi=2&zoom=daily&ua_options=&chart=table&platform=0&group_option=&start_date=2018-07-17&end_date=2018-07-30&country=&action=get_kpi_data");
    }
}