import React from 'react';

import './TodayForecast.css';

import Hour from '../Hour/Hour.js';

function TodayForecast(props) {

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
                {props.todayHours.map((hour) => (<Hour card={hour}
                                                       temp={hour.temp_c}
                                                       time={hour.time}
                                                       condition={hour.condition}
                                                       key={hour.time}/>)
                )}
            </ul>
            <button className="forecast__btn forecast__btn-next" onClick={handleClickNext}></button>
        </section>
    );
}

export default TodayForecast;