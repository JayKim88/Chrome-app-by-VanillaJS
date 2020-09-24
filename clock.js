//클래스와 h1 태그를 가져옴. 
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
// 현재 시간을 가져오는 함수이다. 
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //값이 10보다 작을때 앞에 0을 표기한다. 
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();