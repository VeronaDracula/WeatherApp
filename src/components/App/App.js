// import logo from '../../logo.svg';
import './App.css';
import React from "react";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import {ApiWeather} from "../../utils/ApiWeather";

function App() {

    const [currentLocation, setCurrentLocation] = React.useState([]);
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const [descriptionWeather, setDescriptionWeather] = React.useState([]);

    const [todayHours, setTodayHours] = React.useState([]);
    const [todayAstro, setTodayAstro] = React.useState([]);

    const [forecastTomorrow, setForecastTomorrow] = React.useState([]);
    const [forecastAfterTomorrow, setForecastAfterTomorrow] = React.useState([]);

    const [city, setCity] = React.useState('london');


    //получаем ключевое слово
    function readKeyword(keyword) {
        setCity(keyword)
    }

    const url = 'https://api.weatherapi.com/v1';
    const key = 'f313994b9ee548cb96e135147222507';

    //текущая погода
    React.useEffect(() => {

        const apiWeather = new ApiWeather(url, key, city);
        apiWeather
            .getCurrentWeather()
            .then(data => {
                setCurrentLocation(data.location);
                setCurrentWeather(data.current);
                setDescriptionWeather(data.current.condition)
            })
            .catch(err => console.log(err))
    }, [city]);


    React.useEffect(() => {

        const apiWeather = new ApiWeather(url, key, city);

        apiWeather
            .getForecastWeather()
            .then(data => {
                setTodayHours(data.forecast.forecastday[0].hour);
                setTodayAstro(data.forecast.forecastday[0].astro);
                setForecastTomorrow(data.forecast.forecastday[1]);
                setForecastAfterTomorrow(data.forecast.forecastday[2])
            })
            .catch(err => console.log(err))

    }, [city]);





  return (
      <div className="App">
        <div className="page">

            <Header onSearchCity={readKeyword}/>
            <Main currentWeather={currentWeather}
                  currentLocation={currentLocation}
                  descriptionWeather={descriptionWeather}
                  todayHours={todayHours}
                  todayAstro={todayAstro}
                  forecastTomorrow = {forecastTomorrow}
                  forecastAfterTomorrow = {forecastAfterTomorrow}
            />
            <Footer/>

        </div>
      </div>
  );
}

export default App;
