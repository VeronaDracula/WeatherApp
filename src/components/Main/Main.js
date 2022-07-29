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
                    <TodayNow />
                    <TodayForecast />
                </section>

                <Forecast />
            </div>
        </main>
    );
}

export default Main;