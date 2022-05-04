import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe); 
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
player.on('loaded', pageUpdate);

    
function onPlay (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds)   
};

function pageUpdate() {
    const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
    if (currentTime) {
        player.setCurrentTime(currentTime);
    } 
};

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
