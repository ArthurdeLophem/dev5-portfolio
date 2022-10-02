export default class Weather {
    constructor() {
        this.apiKey = '5a52e4b0665830a2157245b3b43ef76a'
        this.currentWeatherData = [];
        this.ForecastData = [];
        this.getLocation();
        this.lat = 0;
        this.lng = 0;
    };

    getLocation() {
        navigator.geolocation.getCurrentPosition(this.locationSucces.bind(this));

    }

    locationSucces(location) {
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        //console.log(this.lat, this.lng);
        this.searchData();
        //localStorage.clear();
    };

    getCurrent() {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${this.apiKey}`;
    };

    getForecast() {
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lng}&appid=${this.apiKey}`;
        fetch(url).then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            this.weatherData = data;
            this.saveData()
        }).catch(err => {
            console.log(err);
        })
    };

    saveData() {
        localStorage.setItem('currentWeatherData', JSON.stringify(this.currentWeatherData));
        localStorage.setItem('ForecastData', JSON.stringify(this.ForecastData));
    };

    searchData() {
        if (!localStorage.getItem('weatherData') || localStorage.getItem('weatherData').length === 0) {
            this.getCurrent();
            this.getForecast();
        }
        else {
            //displayData(JSON.parse(localStorage.getItem('weatherData')));
        }
    };

    static displayData() {

    };
}