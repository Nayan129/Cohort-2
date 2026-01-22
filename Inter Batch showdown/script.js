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

// ............. logic starts here ...............
let elements = []; // all rectangle data store in it

canvas.style.position = "relative";

// ............. onClick property on rectangle ...........
rectBtn.addEventListener("click", () => {
  const width = 160;
  const height = 100;

  const canvasRect = canvas.getBoundingClientRect();
  const canvasWidth = canvasRect.width;
  const canvasHeight = canvasRect.height;

  const x = canvasWidth / 2 - width / 2;
  const y = canvasHeight / 2 - height / 2;

  let rectDisplay = {
    id: "r" + (elements.length + 1),
    type: "rect",
    width: width,
    height: height,
    x: x,
    y: y,
    fill: "#3b82f6",
  };
  elements.push(rectDisplay);
  console.log(rectDisplay);

  // now we create a div jo canvas me rectangle size me show hoga
  const div = document.createElement("div");

  // div ki size,color and position
  div.className = "rectangle";
  div.style.position = "absolute";
  div.style.left = rectDisplay.x + "px";
  div.style.top = rectDisplay.y + "px";
  div.style.width = rectDisplay.width + "px";
  div.style.height = rectDisplay.height + "px";
  div.style.backgroundColor = rectDisplay.fill;
  div.style.borderRadius = "10px";
  div.style.cursor = "pointer";

  // canvas me ye div with all its data append ho jayega
  canvas.appendChild(div);

  const canvasText = document.querySelector(".canvasText");
  canvasText.innerHTML = "";

  div.dataset.id = rectDisplay.id;
  console.log(div.dataset.id);

  div.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    div.style.border = "3px dashed yellow";
  });
});

clearBtn.addEventListener("click", () => {
  canvasText.innerHTML = "Click + Rectangle / + Text to add elements";
});
