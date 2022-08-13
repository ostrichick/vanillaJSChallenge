const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); // html 객체들

const TODOS_KEY = "todos"; // 할일들을 담을 LocalStorage 키값 이름
let toDos = []; // 할일들을 담을 자바스크립트 배열

showToDoInput(); // 로그인 되어있으면 할일 입력버튼 보이기, 아닐경우 가리기
function showToDoInput() {
  if (localStorage.getItem(USERNAME_KEY) === null) {
    toDoInput.classList.add(HIDDEN_CLASSNAME);
  } else {
    toDoInput.classList.remove(HIDDEN_CLASSNAME);
  }
}

// 현재 할일 목록을 JSON으로 변경하여 LocalStorage에 저장
function saveToDos(toDos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  hideBtn();
}

// 할일 하나를 삭제하고 목록을 저장
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(toDos);
}

//배열, 옮길 대상의 index, 이동할 값
const changeArrayOrder = function (toDos, targetIdx, moveValue) {
  // 배열값이 없는 경우 나가기
  if (toDos.length < 0) return;
  // 이동할 index 값을 변수에 선언
  const newPosition = targetIdx + moveValue;
  // 이동할 값이 0보다 작거나 최대값을 벗어나는 경우 종료
  if (newPosition < 0 || newPosition >= toDos.length) return;

  // 임의의 변수를 하나 만들고 배열 값 저장
  const tempList = JSON.parse(JSON.stringify(toDos));

  // 옮길 대상을 target 변수에 저장하기
  const target = tempList.splice(targetIdx, 1)[0];

  // 새로운 위치에 옮길 대상을 추가하기
  tempList.splice(newPosition, 0, target);
  return tempList;
};

// 위 화살표를 누르면 해당 li를 위로 한칸 올리고, 배열도 바꿈
function upwardToDo(event) {
  const li = event.target.parentElement;
  if (li.previousSibling != null) {
    const liPrev = li.previousSibling;
    const liText = event.target.previousSibling.innerText;
    toDoList.insertBefore(li, liPrev);

    console.log(li.id);
    const cIdx = toDos.findIndex((keys) => keys.id == li.id);
    console.log(cIdx + " cidx");
    console.log(toDos);
    saveToDos(changeArrayOrder(toDos, cIdx, -1));
  }
}
function downwardToDo(event) {
  const li = event.target.parentElement;
  if (li.nextSibling != null) {
    const liNext = li.nextSibling;
    const liText = event.target.nextSibling.innerText;
    toDoList.insertBefore(li, liNext.nextSibling);

    console.log(li.id);
    const cIdx = toDos.findIndex((keys) => keys.id == li.id);
    console.log(cIdx + " cidx");
    console.log(toDos);
    saveToDos(changeArrayOrder(toDos, cIdx, 1));
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text + " 　 ";
  const buttonU = document.createElement("button");
  const buttonD = document.createElement("button");
  const buttonX = document.createElement("button");
  buttonU.innerText = "⬆️";
  buttonD.innerText = "⬇️";
  buttonX.innerText = "❌";
  buttonU.classList.add("buttonU");
  buttonD.classList.add("buttonD");
  buttonU.addEventListener("click", upwardToDo);
  buttonD.addEventListener("click", downwardToDo);
  buttonX.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(buttonU);
  li.appendChild(buttonD);
  li.appendChild(buttonX);
  toDoList.appendChild(li);
}

//현재 초 값을 아이디로하여 입력된 todo값을 배열에 집어넣기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(toDos);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// 해당 버튼의 부모li가 이전형제나 다음형제가 없을경우 화살표 숨기기

function hideBtn() {
  let btnUs = document.querySelectorAll(".buttonU");
  let btnDs = document.querySelectorAll(".buttonD");

  btnUs.forEach((btn, idx, array) => {
    if (btn.parentElement.previousSibling == null) {
      btn.style.visibility = "hidden";
    } else {
      btn.style.visibility = "";
    }
  });
  btnDs.forEach((btn, idx, array) => {
    if (btn.parentElement.nextSibling == null) {
      btn.style.visibility = "hidden";
    } else {
      btn.style.visibility = "";
    }
  });
}
hideBtn();
