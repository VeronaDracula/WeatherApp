import React from 'react';

import './Hour.css';

function Hour(props) {

    function separationTime(value) {
        if(value !== undefined) {
            const data = value.split(' ');
            return data[1]
        }
    }

    return (
        <li className="hour">
            <p className="hour__time">{separationTime(props.time)}</p>
            <div className="hour__icon-box">
                <img className="hour__icon" src={props.condition.icon} alt=""/>
            </div>
            <p className="hour__temp"><span className="hour__temp-number">{props.temp}&#176;</span></p>
        </li>
    );
}

export default Hour;