
// 각 클래스를 자바스크립트로 불러오기. 
const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greetings")
// 중복되는 상수 선언하기. 
const USER_LS = "currentUser";
const SHOWING_CN = "showing";
//localStorage에서 Key 와 Value를 저장한다. 이름 저장 함수. showing 이 정확히 어떤 기능???
function saveName(text) {
    localStorage.setItem(USER_LS, text); 
}
//form 태그의 이벤트 리스너 함수 
function handleSubmit(event) {
    event.preventDefault();
    // 입력 후 enter 를 눌러도 새로고침 발생하지 않음. 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
//showing 태그를 생성하고, 이벤트리스너 생성. 
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
// form 태그를 지우고 Hello + 이름 문구를 출력. 
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
// LocalStorage 에 이름이 있으면, 이름을 불러온다. 
function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    //localStorage에서 Value 를 얻는다.
    if (currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();