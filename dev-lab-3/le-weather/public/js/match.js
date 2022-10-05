export default class Match {
    constructor() {
        this.apiKey = '';
        this.MatchData = [];
        this.searchMatches();
    };
    getMatches() {
        fetch('http://data.nba.net/prod/v1/2022/schedule.json')
            .then(response => {
                //console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                this.MatchData = data;
                console.log(this.MatchData);

            }).catch(err => {
                console.log(err);
            })
    };

    sortMatchesToday() {
        this.saveMatches();
        this.displayMatch();
    }

    saveMatches() {
        localStorage.setItem('MatchData', JSON.stringify(this.MatchData));
    };

    searchMatches() {
        if (!localStorage.getItem('MatchData')) {
            this.getMatches();
        } else {
            this.currentWeatherData = JSON.parse(localStorage.getItem('MatchData'));
            this.sortMatchesToday();
        }
    };

    displayMatch() {

    };
}