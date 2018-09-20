<?php

namespace App\Controller;

use http\Env\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\MessageGenerator;


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
}