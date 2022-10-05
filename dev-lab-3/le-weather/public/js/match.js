export default class Match {
    constructor() {
        this.apiKey = '';
        this.MatchData = [];
    };
    getMatches() {
        console.log('forecast')
        let url = ``;
        fetch(url).then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            this.MatchData = data;
            console.log(this.MatchData);
            this.saveMatches();
            this.displayMatch();
        }).catch(err => {
            console.log(err);
        })
    };

    saveMatches() {
        localStorage.setItem('MatchData', JSON.stringify(this.MatchData));
    };

    searchMatches() {
        if (!localStorage.getItem('MatchData')) {
            this.getCurrent();
        } else {
            this.currentWeatherData = JSON.parse(localStorage.getItem('MatchData'));
            this.displayData();
        }
    };

    displayMatch() {

    };
}