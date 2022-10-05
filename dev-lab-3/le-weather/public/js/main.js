import '../src/main.css';
import Match from './match.js';
import Weather from '../js/weather.js';

const weather = new Weather();
const match = new Match();
//const gif = new Gif();


const reload = () => {
    let reloadButton = document.querySelector('.reload__button');
    weather.removeLocalStorage();
    localStorage.removeItem('gif');
    //gif.removeLocalStorage();
    window.location.reload();
}

//reload()