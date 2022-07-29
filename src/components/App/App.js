// import logo from '../../logo.svg';
import './App.css';
import React from "react";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import {apiWeather} from "../../utils/ApiWeather";

function App() {


    // React.useEffect(() => {
    //     apiWeather
    //         .getCurrentWeather()
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => console.log(err))
    // }, []);

    // React.useEffect(() => {
    //
    //     apiWeather
    //         .getForecastWeather()
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => console.log(err))
    //
    // }, []);





  return (
      <div className="App">
        <div className="page">

            <Header/>
            <Main/>
            <Footer/>

        </div>
      </div>
  );
}

export default App;
