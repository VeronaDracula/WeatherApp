import React from 'react';

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <a className="footer__link" target="_blank" href="https://www.flaticon.com/ru/free-icons/"
                   title="капля иконки"> Иконки параметров погоды от Freepik - Flaticon
                </a>

                <a target="_blank" href="https://www.weatherapi.com/" title="Free Weather API">
                    <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
                    alt="Weather data by WeatherAPI.com"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;