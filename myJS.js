"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragEnter = function () {
  this.classList.add("hovered");
};
const dragLeave = function () {
  this.classList.remove("hovered");
};

const dragOver = (e) => {
  e.preventDefault();
};

fill.addEventListener("dragstart", function () {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList.add("invisible");
  }, 0);
});

fill.addEventListener("dragend", function () {
  this.className = "fill";
});

const drop = function () {
  this.append(fill);
};

empties.forEach((empt) => {
  empt.addEventListener("dragenter", dragEnter);
  empt.addEventListener("dragleave", dragLeave);
  empt.addEventListener("dragover", dragOver);
  empt.addEventListener("drop", drop);
});
