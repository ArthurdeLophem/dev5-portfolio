export default class Match {
    constructor() {
        this.MatchData = [];
        this.getToday();
        this.searchMatches();
        this.date;
        this.matchup = [];
        this.teams = [];
    };

    getToday() {
        var d = new Date();
        let time = d.toLocaleString("en-CA", { timeZone: 'America/New_York' });
        let day = time.slice(8, 10);
        let month = time.slice(5, 7);
        let year = time.slice(0, 4);
        let date = year + month + day;
        this.date = date.toString();
    }

    getMatches() {
        console.log('getMatches');
        fetch('http://data.nba.net/prod/v1/2022/schedule.json')
            .then(response => {
                //console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                this.MatchData = data;
                this.sortMatchesToday();
            }).catch(err => {
                console.log(err);
            })
        if (!localStorage.getItem('teams')) {
            this.searchTeams();
        }
    };

    sortMatchesToday() {
        console.log(this.MatchData.league.standard);
        let array = [];
        this.MatchData.league.standard.forEach(item => {
            if (item.startDateEastern === this.date) {
                array.push(item);
            }
        });
        console.log(array);
        this.MatchData = array;
        this.saveMatches();
    }

    saveMatches() {
        localStorage.setItem('MatchData', JSON.stringify(this.MatchData));
        localStorage.setItem('teams', JSON.stringify(this.teams));
        this.searchTeams();
    };

    searchMatches() {
        if (!localStorage.getItem('MatchData')) {
            console.log("a")
            this.getMatches();
        } else {
            console.log("b")
            this.MatchData = JSON.parse(localStorage.getItem('MatchData'));
        }
        if (!localStorage.getItem('teams')) {
            console.log("c")
            this.getMatches();
        } else {
            console.log("d")
            this.teams = JSON.parse(localStorage.getItem('teams'));
        }
    };

    searchTeams() {
        fetch('http://data.nba.net/10s/prod/v2/2022/teams.json')
            .then(response => {
                return response.json();
            }).then(data => {
                this.teams = data.league;
                this.randomMatch();
                this.saveMatches();
            }).catch(err => {
                console.log(err);
            })
    }

    randomMatch() {
        let index = Math.floor(Math.random() * this.MatchData.length);
        this.matchup = [this.MatchData[index].hTeam.teamId, this.MatchData[index].vTeam.teamId];
    }

    displayMatch() {
        console.log(this.matchup)
    };
}