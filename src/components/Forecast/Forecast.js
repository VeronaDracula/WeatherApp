import React from 'react';

import './Forecast.css';

function Forecast(props) {

    function getTemp(data) {
        if(data !== undefined) {
            return data.avgtemp_c
        }
    }

    function getIcon(data) {
        if(data !== undefined) {
            return data.condition.icon
        }
    }

    function getDate(data) {
        if(data !== undefined) {
            return data.slice(5)
        }
    }




    return (
        <section className="forecast">
            <ul className="forecast__days">
                <li className="forecast__day">
                    <h2 className="forecast__day-title">{getDate(props.forecastTomorrow.date)}</h2>

                    <div className="forecast__day-box">
                        <div className="forecast__day-icon-box">
                            <img className="forecast__day-icon" src={getIcon(props.forecastTomorrow.day)} alt=""/>
                        </div>
                        <span className="forecast__day-temp">{getTemp(props.forecastTomorrow.day)}&#176;</span>
                    </div>
                </li>

                <li className="forecast__day">
                    <h2 className="forecast__day-title">{getDate(props.forecastAfterTomorrow.date)}</h2>

                    <div className="forecast__day-box">
                        <div className="forecast__day-icon-box">
                            <img className="forecast__day-icon" src={getIcon(props.forecastAfterTomorrow.day)} alt=""/>
                        </div>
                        <span className="forecast__day-temp">{getTemp(props.forecastAfterTomorrow.day)}&#176;</span>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Forecast;