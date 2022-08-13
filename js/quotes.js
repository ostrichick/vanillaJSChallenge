const quotes = [
  {
    quote: "세 번 참으면 호구 된다",
    author: "박명수",
  },
  {
    quote: "늦었다고 생각할 때가 정말 너무 늦었다",
    author: "박명수",
  },
  {
    quote: "개천에서 용 난 사람 만나면 개천으로 빨려 들어간다",
    author: "박명수",
  },
  {
    quote: "나까지 나설 필요는 없다",
    author: "박명수",
  },
  {
    quote: "감사의 표시는 돈으로 하라",
    author: "박명수",
  },
  {
    quote: "티끌 모아 티끌",
    author: "박명수",
  },
  {
    quote: "죽음과 결혼은 뒤로 미룰수록 좋다",
    author: "박명수",
  },
  {
    quote: "일찍 일어나는 새가 피곤하다",
    author: "박명수",
  },
  {
    quote: "원수는 직장에서 만난다",
    author: "박명수",
  },
  {
    quote: "노력하지 않는 자는 기회조차 안 옵니다",
    author: "박명수",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = " - " + todaysQuote.author;
