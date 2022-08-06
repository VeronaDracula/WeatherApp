import React from 'react';

import './TodayNow.css';

function TodayNow(props) {

    function separationDate(value) {
        if(value !== undefined) {
            const data = value.split(' ');
            return data[0]
        }
    }

    function separationTime(value) {
        if(value !== undefined) {
            const data = value.split(' ');
            return data[1]
        }
    }


    return (
        <section className="today-now">
            <div className="location">
                <h1 className="location__city">{props.currentLocation.name},</h1>
                <p className="location__country">{props.currentLocation.country}</p>
            </div>

            <div className="now-date">
                <p className="now-date__time">Now <span className="now-date__time-number">{separationTime(props.currentLocation.localtime)}</span></p>
                <p className="now-date__date"><span className="now-date__date-number">{separationDate(props.currentLocation.localtime)}</span></p>
            </div>

            <div className="now-weather">
                <div className="now-weather__box">
                    <img className="now-weather__icon" src={props.descriptionWeather.icon} alt=""/>
                        <p className="now-weather__description">{props.descriptionWeather.text}</p>
                </div>

                <div className="now-weather__box-temp">
                    <p className="now-weather__temp">
                        <span className="now-weather__temp-number">{props.currentWeather.temp_c}&#176;</span>
                        C
                    </p>

                    <p className="now-weather__feelslike">Feels like <span className="now-weather__feelslike-temp">
                        {props.currentWeather.feelslike_c}&#176;</span>
                    </p>
                </div>
            </div>

            <ul className="other-info">
                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--wind"></div>
                    <p className="other-info__text">
                        <span className="other-info__wind-speed">{props.currentWeather.wind_kph}</span>kph,
                        <span className="other-info__wind-direction"> {props.currentWeather.wind_dir}</span>
                    </p>
                </li>

                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--humidity"></div>
                    <p className="other-info__text">
                        <span className="other-info__humidity">{props.currentWeather.humidity}</span>%
                    </p>
                </li>

                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--dawn"></div>
                    <p className="other-info__text">
                        <span className="other-info__dawn">{props.todayAstro.sunrise}</span>
                    </p>
                </li>

                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--sunset"></div>
                    <p className="other-info__text">
                        <span className="other-info__sunset">{props.todayAstro.sunset}</span>
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default TodayNow;