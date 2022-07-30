// import logo from '../../logo.svg';
import './App.css';
import React from "react";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import {apiWeather} from "../../utils/ApiWeather";

function App() {

    const [currentLocation, setCurrentLocation] = React.useState([]);
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const [descriptionWeather, setDescriptionWeather] = React.useState([]);

    const [todayHours, setTodayHours] = React.useState([]);
    const [todayAstro, setTodayAstro] = React.useState([]);

    const [forecastTomorrow, setForecastTomorrow] = React.useState([]);
    const [forecastAfterTomorrow, setForecastAfterTomorrow] = React.useState([]);



    //текущая погода
    React.useEffect(() => {
        apiWeather
            .getCurrentWeather()
            .then(data => {
                setCurrentLocation(data.location);
                setCurrentWeather(data.current);
                setDescriptionWeather(data.current.condition)
            })
            .catch(err => console.log(err))
    }, []);


    React.useEffect(() => {

        apiWeather
            .getForecastWeather()
            .then(data => {
                setTodayHours(data.forecast.forecastday[0].hour);
                setTodayAstro(data.forecast.forecastday[0].astro);
                setForecastTomorrow(data.forecast.forecastday[1]);
                setForecastAfterTomorrow(data.forecast.forecastday[2])
            })
            .catch(err => console.log(err))

    }, []);





  return (
      <div className="App">
        <div className="page">

            <Header/>
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
