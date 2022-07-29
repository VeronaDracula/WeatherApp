import React from 'react';

import './Forecast.css';



function Forecast() {
    return (
        <section className="forecast">
            <ul className="forecast__days">
                <li className="forecast__day">
                    <h2 className="forecast__day-title">13.05</h2>

                    <div className="forecast__day-box">
                        <div className="forecast__day-icon-box">
                            <img className="forecast__day-icon" src="./weather/day/176.png" alt=""/>
                        </div>
                        <span className="forecast__day-temp">25&#176;</span>
                    </div>
                </li>

                <li className="forecast__day">
                    <h2 className="forecast__day-title">14.05</h2>

                    <div className="forecast__day-box">
                        <div className="forecast__day-icon-box">
                            <img className="forecast__day-icon" src="./weather/day/392.png" alt=""/>
                        </div>
                        <span className="forecast__day-temp">25&#176;</span>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Forecast;