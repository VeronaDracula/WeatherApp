import React from 'react';

import './Header.css';


function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <p className="logo">WeatherApp</p>

                <form className="search-form">
                    <input className="search-form__input" placeholder="City" type="text"/>
                    <button className="search-form__btn">Search</button>
                </form>
            </div>
        </header>
    );
}

export default Header;