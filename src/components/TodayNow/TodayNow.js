import React from 'react';

import './TodayNow.css';

function TodayNow() {
    return (
        <section className="today-now">
            <h1 className="location"><span className="location__city">London</span>,
                <span className="location__country">Great Britain</span>
            </h1>

            <div className="now-date">
                <p className="now-date__time">Now <span className="now-date__time-number">12:23</span></p>
                <p className="now-date__date"><span className="now-date__date-number">12.05.2012</span></p>
            </div>

            <div className="now-weather">
                <div className="now-weather__box">
                    <img className="now-weather__icon" src="" alt=""/>
                        <p className="now-weather__description">Sunny</p>
                </div>

                <div className="now-weather__box-temp">
                    <p className="now-weather__temp">
                        <span className="now-weather__temp-number">23&#176;</span>
                        C
                    </p>

                    <p className="now-weather__feelslike">Feels like <span className="now-weather__feelslike-temp">25&#176;</span>
                    </p>
                </div>
            </div>

            <ul className="other-info">
                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--wind"></div>
                    <p className="other-info__text">
                        <span className="other-info__wind-speed">20</span>км/ч,
                        <span className="other-info__wind-direction">ЮЗ</span>
                    </p>
                </li>

                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--humidity"></div>
                    <p className="other-info__text">
                        <span className="other-info__humidity">32</span>%
                    </p>
                </li>

                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--dawn"></div>
                    <p className="other-info__text">
                        <span className="other-info__dawn">05:18 AM</span>
                    </p>
                </li>

                <li className="other-info__box">
                    <div className="other-info__icon other-info__icon--type--sunset"></div>
                    <p className="other-info__text">
                        <span className="other-info__sunset">08:55 PM</span>
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default TodayNow;