import React from 'react';

import './TodayForecast.css';

function TodayForecast() {

    const sliderRef = React.useRef();

    function handleClickPrev() {
        sliderRef.current.scrollLeft -= 74;
    }

    function handleClickNext() {
        sliderRef.current.scrollLeft += 74;
    }



    return (
        <section className="today-forecast">
            <button className="forecast__btn forecast__btn-prev" onClick={handleClickPrev}></button>
            <ul className="hours" ref={sliderRef}>
                <li className="hour">
                    <p className="hour__time">0:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/113.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">1:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/day/200.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">2:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">3:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>


                <li className="hour">
                    <p className="hour__time">4:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">5:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">6:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">7:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>

                <li className="hour">
                    <p className="hour__time">8:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>


                <li className="hour">
                    <p className="hour__time">9:00</p>
                    <div className="hour__icon-box">
                        <img className="hour__icon" src="./weather/night/179.png" alt=""/>
                    </div>
                    <p className="hour__temp"><span className="hour__temp-number">20&#176;</span></p>
                </li>
            </ul>
            <button className="forecast__btn forecast__btn-next" onClick={handleClickNext}></button>
        </section>
    );
}

export default TodayForecast;