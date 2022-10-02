export default class Weather {
    constructor() {
        this.weatherData = [];
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