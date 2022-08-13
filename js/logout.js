// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";
const logout = document.querySelector("#logout");

logout.addEventListener("click", logoutFn);
function logoutFn() {
  // localStorage.setItem(USERNAME_KEY, "");
  localStorage.clear(USERNAME_KEY);
  logout.classList.add(HIDDEN_CLASSNAME);
  location.reload();
}
showLogoutBtn();
function showLogoutBtn() {
  if (localStorage.getItem(USERNAME_KEY) === null) {
    logout.classList.add(HIDDEN_CLASSNAME);
  } else {
    logout.classList.remove(HIDDEN_CLASSNAME);
  }
}
