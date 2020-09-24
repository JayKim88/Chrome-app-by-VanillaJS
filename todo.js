//HTML 에서 클래스 불러오기. 
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"); 
// 상수 선언하기.
const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//JSON.stringify 는 자바스크립트의 object를 string으로 바꿔준다. 자바스크립트는 데이터를 String으로만 저장하기에 이것이 필요.

// 
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerHTML = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    //toDos 에 내용을 넣은 뒤 저장할 것. 
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //enter 시 글자 사라짐. 
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);
        //String -> object 변환하기. 
        parsedToDos.forEach(function(toDo){
            //함수를 각각 실행. 
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();