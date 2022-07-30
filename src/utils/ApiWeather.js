class ApiWeather {

    constructor(config, key, city) {
        this.url = config;
        this.key = key;
        this.city = city;
        this.headers = {
            'Content-Type': 'application/json',
        }
    }


    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getCurrentWeather() {
        return fetch(this.url + '/current.json' + '?' + 'key=' + this.key + '&q=' + this.city, {
            headers: this.headers
        }).then(response => {
            return this._getResponseData(response)
        })
    }

    getForecastWeather() {
        return fetch(this.url + '/forecast.json' + '?' + 'key=' + this.key + '&q=' + this.city + '&days=3', {
            headers: this.headers
        }).then(response => {
            return this._getResponseData(response)
        })
    }
}


const url = 'https://api.weatherapi.com/v1';
const key = 'f313994b9ee548cb96e135147222507';
const city = 'london';

export const apiWeather = new ApiWeather(url, key, city);