export default class Weather {
    constructor() {
        this.apiKey = '5a52e4b0665830a2157245b3b43ef76a'
        this.currentWeatherData = [];
        this.ForecastData = [];
        this.getLocation();
        this.lat = 0;
        this.lng = 0;
        this.getTime();
        this.time;
    };

    getTime() {
        let today = new Date();
        this.time = today.getHours() + ":" + today.getMinutes();
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(this.locationSucces.bind(this));
    }

    locationSucces(location) {
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        //console.log(this.lat, this.lng);
        //localStorage.clear();
        this.searchData();
    };

    getCurrent() {
        console.log('Current weather')
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${this.apiKey}&units=metric`;
        fetch(url).then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            this.currentWeatherData = data;
            this.saveData()
            this.displayData();
        }).catch(err => {
            console.log(err);
        })
    };

    getForecast() {
        console.log('forecast')
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lng}&appid=${this.apiKey}&units=metric`;
        fetch(url).then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            this.ForecastData = data;
            this.saveData()
            this.displayData();
        }).catch(err => {
            console.log(err);
        })
    };

    saveData() {
        localStorage.setItem('currentWeatherData', JSON.stringify(this.currentWeatherData));
        localStorage.setItem('ForecastData', JSON.stringify(this.ForecastData));
    };

    searchData() {
        if (!localStorage.getItem('currentWeatherData')) {
            this.getCurrent();
        } else {
            this.currentWeatherData = JSON.parse(localStorage.getItem('currentWeatherData'));
            this.displayData();
        }

        if (!localStorage.getItem('ForecastData')) {
            this.getForecast();
        }
        else {
            this.ForecastData = JSON.parse(localStorage.getItem('ForecastData'));
            this.displayData();
        }
    };

    displayData() {
        //display time
        document.querySelector('.time__text').innerHTML = this.time;

        //display current weather data
        document.querySelector('.weather__text').innerHTML = this.currentWeatherData.weather[0].description + " with feeling temp of " + this.currentWeatherData.main.feels_like + " °C";
        document.querySelector('.info__text--weather').innerHTML = this.currentWeatherData.weather[0].main;
        document.querySelector('.info__text--temp').innerHTML = this.currentWeatherData.main.temp + " °C";
        document.querySelector('.info__text--humidity').innerHTML = this.currentWeatherData.main.humidity + " %";
        document.querySelector('.info__text--windspeed').innerHTML = this.currentWeatherData.wind.speed;

        //display forecast data
        console.log(this.ForecastData);

    };
}