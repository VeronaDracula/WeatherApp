import React from 'react';

import './Main.css';

import TodayNow from '../TodayNow/TodayNow.js';
import TodayForecast from '../TodayForecast/TodayForecast.js';
import Forecast from '../Forecast/Forecast.js';

function Main(props) {



    return (
        <main className="content">
            <div className="content__box container">
                <section className="today">
                    <TodayNow currentLocation={props.currentLocation}
                              currentWeather={props.currentWeather}
                              descriptionWeather={props.descriptionWeather}
                              todayAstro={props.todayAstro}
                    />
                    <TodayForecast todayHours={props.todayHours}/>
                </section>

                <Forecast forecastTomorrow = {props.forecastTomorrow}
                          forecastAfterTomorrow = {props.forecastAfterTomorrow}/>
            </div>
        </main>
    );
}

export default Main;