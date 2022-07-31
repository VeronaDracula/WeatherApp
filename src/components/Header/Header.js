import React from 'react';

import './Header.css';


function Header(props) {

    const [keyword, setKeyword] = React.useState('');

    function handleChangeKeyword(e) {
        setKeyword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearchCity(keyword);
    }


    return (
        <header className="header">
            <div className="header__container container">
                <p className="logo">WeatherApp</p>

                <form className="search-form" onSubmit={handleSubmit}>
                    <input className="search-form__input" placeholder="City" type="text"  id="search" name="search" onChange={handleChangeKeyword}/>
                    <button className="search-form__btn" type="submit">Search</button>
                </form>
            </div>
        </header>
    );
}

export default Header;