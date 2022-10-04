export default class Gif {
    constructor() {
        this.apiKey = 'MBPBZILz5i7XArJR1PAmAsUSAxA3LnQi'
        this.gif = [];
        this.searchData();
    };

    getGif() {
        console.log('giph')
        let url = `https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}`;
        fetch(url).then(response => {
            //console.log(response);
            return response.json();
        }).then(data => {
            //console.log(data);
            this.gif = data;
            console.log(this.gif);
            this.saveData();
            this.displayData();
        }).catch(err => {
            console.log(err);
        })
    };

    saveData() {
        localStorage.setItem('gif', JSON.stringify(this.gif));
    };

    searchData() {
        if (!localStorage.getItem('gif')) {
            this.getGif();
        } else {
            this.gif = JSON.parse(localStorage.getItem('gif'));
            this.displayData();
        }
    };

    displayData() {
        let container = document.querySelector(".gif__container");
        container.src = `${this.gif.data.embed_url}`;
    };
}