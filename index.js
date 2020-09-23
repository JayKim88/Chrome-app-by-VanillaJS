const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(142, 68, 173)"

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);    
}

init();

function handleOnline() {
    console.log("you are using Internet!");
}

function handleOffline() {
    console.log("you are out of internet!");
}


window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);