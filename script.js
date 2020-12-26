"use strict";

const btnPrev = document.querySelector(`.button-previous`);
const btnNext = document.querySelector(`.button-next`);

const quote = document.querySelector(`.main-text`);
const name = document.querySelector(`.name-text`);
const position = document.querySelector(`.position-text`);
const image = document.querySelector(`.img`);

let state = true;

function changeContent() {
  if (state) {
    quote.textContent =
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    name.textContent = "John Tarkpor";
    position.textContent = "Junior Frontend Developer";
    image.src = "images/image-john.jpg";
  } else {
    quote.textContent =
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    name.textContent = "Tanya Sinclair";
    position.textContent = "UX Engineer";
    image.src = "images/image-tanya.jpg";
  }
  state = !state;
}

btnPrev.addEventListener("click", changeContent);
btnNext.addEventListener("click", changeContent);
