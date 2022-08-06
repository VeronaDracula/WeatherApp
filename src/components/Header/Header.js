import React from 'react';

import './Header.css';

function Header(props) {

    const [keyword, setKeyword] = React.useState('');

    // const [isValid, setIsValid] = React.useState(false);

    const errorMessageClassName = (
        `${props.isValid ? 'search-form__input-error' : 'search-form__input-error search-form__input-error--active'}`
    );

    // const errorMessageText = (
    //     `${isValid ? 'Некорректный ввод' : 'Введите название города'}`
    // );

    function handleChangeKeyword(e) {
        setKeyword(e.target.value);
        // setIsValid(e.target.closest(".form-start").checkValidity());
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
                    <div className="search-form__input-box">
                        <input className="search-form__input" placeholder="City" type="text"  id="search"
                               name="search" onChange={handleChangeKeyword} required/>
                        <span className={errorMessageClassName}>Некорректный ввод</span>
                    </div>
                    <button className="search-form__btn" type="submit">Search</button>
                </form>
            </div>
        </header>
    );
}

export default Header;