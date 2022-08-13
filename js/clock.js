const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const years = String(date.getFullYear());
  const months = String(date.getMonth());
  const dates = String(date.getDate()).padStart(2, "0");
  const dayNum = String(date.getDay());
  let dayText = null;
  switch (dayNum) {
    case "0":
      dayText = "일";
      break;
    case "1":
      dayText = "월";
      break;
    case "2":
      dayText = "화";
      break;
    case "3":
      dayText = "수";
      break;
    case "4":
      dayText = "목";
      break;
    case "5":
      dayText = "금";
      break;
    case "6":
      dayText = "토";
      break;
  }
  let clockText = `${years}년 ${months}월 ${dates}일 ${dayText}요일`;
  clockText += "<br /><span>";
  clockText += `${hours}:${minutes}:${seconds}`;
  clockText += "</span>";
  clock.innerHTML = clockText;
}

getClock();
setInterval(getClock, 1000);
