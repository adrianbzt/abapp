/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './components/Checkout';
import AppBar from './components/AppBar';


const checkout = document.getElementById('react-checkout-root');
if (checkout) {
    try {
        ReactDOM.render(
            <AppBar/>,
            checkout
            // <div>
            //
            //     <Checkout {...(checkout.dataset)}/>,
            //     checkout
            // </div>
        );
    } catch (error) {
        console.error(error);
    }
}

console.log('Hello Webpack Encore! Hello, React! Edit me in assets/js/app.js again');
