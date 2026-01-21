const main = document.querySelector("main");
// navbar rightside buttons
const nav = document.querySelector("nav");
const rectBtn = document.querySelector(".rightNav .rectBtn");
const textBtn = document.querySelector(".rightNav .textBtn");
const saveBtn = document.querySelector(".rightNav .saveBtn");
const clearBtn = document.querySelector(".rightNav .clearBtn");

const section = document.querySelector("section");
// left panel
const leftPanel = document.querySelector(".left-section");
const moveUp = document.querySelectorAll(".left-section .moveUp");
const moveDown = document.querySelectorAll(".left-section .moveDown");
// Center panel
const centerPanel = document.querySelector(".center-section");
const canvas = document.querySelector(".center-section .center");
// Right Panel
const rightPanel = document.querySelector(".right-section");

rectBtn.addEventListener("click", () => {
  console.log("rectangle pe clicked");
  
});
