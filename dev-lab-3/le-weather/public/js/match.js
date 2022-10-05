export default class Match {
    constructor() {
        this.MatchData = [];
        this.getToday();
        this.searchMatches();
        this.date;
    };

    getToday() {
        var d = new Date();
        let time = d.toLocaleString("en-CA", { timeZone: 'America/New_York' });
        let day = time.slice(8, 10);
        let month = time.slice(5, 7);
        let year = time.slice(0, 4);
        let date = year + month + day
        this.date = date.toString();
    }

    getMatches() {
        console.log('here');
        fetch('http://data.nba.net/prod/v1/2022/schedule.json')
            .then(response => {
                //console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                this.MatchData = data;
                console.log(this.MatchData);
                this.sortMatchesToday();
            }).catch(err => {
                console.log(err);
            })
    };

    sortMatchesToday() {
        console.log(this.MatchData.league.standard);
        let array = [];
        this.MatchData.league.standard.forEach(item => {
            //console.log(item);
            if (item.startDateEastern === this.date) {
                array.push(item);
            }
        });
        console.log(array);
        this.MatchData = array;
        this.saveMatches();
        //this.displayMatch();
    }

    saveMatches() {
        localStorage.setItem('MatchData', JSON.stringify(this.MatchData));
    };

    searchMatches() {
        //localStorage.removeItem('MatchData');
        if (!localStorage.getItem('MatchData')) {
            this.getMatches();
        } else {
            this.MatchData = JSON.parse(localStorage.getItem('MatchData'));
            this.sortMatchesToday();
        }
    };

    displayMatch() {

    };
}