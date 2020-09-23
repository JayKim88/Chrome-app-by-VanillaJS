const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    // contains 는 해당 클래스가 있는지 확인한다. 없을땐 add, 있을땐 remove.  
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

init();