<?php

namespace App\Controller;

use http\Env\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class MyController extends AbstractController {

    /**
     * @Route("/", name="home")
     */
    public function defaultIndex() {

        return $this->render(
            'base.html.twig',
            array('event' => array(
                'id' => 1,
                'title' => 'Hello, React and Symfony',
                'formattedPrice' => 4.99
            ))
        );
    }
}