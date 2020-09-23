const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
   title.classList.toggle(CLICKED_CLASS);
// class가 있다면 remove. 없다면 add 하는 메소드.
}

function init(){
    title.addEventListener("click", handleClick);
}

init();