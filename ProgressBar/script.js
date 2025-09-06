const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const progressEle = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
//===============Next and Back Button Events=================
function nextOne(e) {
  e.preventDefault();
  form1.style.left = "-450px";
  form2.style.left = "25px";

  //next slide
  incrementNumber();

  //update progress
  update();
}

function backOne(e) {
  e.preventDefault();
  form1.style.left = "25px";
  form2.style.left = "450px";

  //back slide
  decrementNumber();

  //update progress
  update();
}

function nextTwo(e) {
  e.preventDefault();
  form2.style.left = "-450px";
  form3.style.left = "25px";

  //next slide
  incrementNumber();

  //update progress
  update();
}

function backTwo(e) {
  e.preventDefault();
  form2.style.left = "25px";
  form3.style.left = "450px";

  //back slide
  decrementNumber();
  //update progress
  update();
}

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progressEle.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}

//===============Increment and Decrement Number=================
function incrementNumber() {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
}

function decrementNumber() {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
}
const btnsEvents = () => {
  const next1 = document.getElementById("next1");
  const next2 = document.getElementById("next2");
  const back1 = document.getElementById("back1");
  const back2 = document.getElementById("back2");

  next1.addEventListener("click", nextOne);

  back1.addEventListener("click", backOne);

  next2.addEventListener("click", nextTwo);

  back2.addEventListener("click", backTwo);
};

document.addEventListener("DOMContentLoaded", btnsEvents);
