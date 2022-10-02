export default class Weather {
    constructor() {
        this.weatherData = [];
    };

    getLocation() {
        navigator.geolocation.getCurrentPosition(this.locationSucces.bind(this), this.locationError.bind(this));
    }

    static fetcher() {

    };

    static saveData() {

    };

    static searchData() {
        if (!localStorage.getItem('weatherData')) {
            this.fetcher();
        }
        else {
            displayData(JSON.parse(localStorage.getItem('weatherData')));
        }
    };

    static displayData() {

    };
}