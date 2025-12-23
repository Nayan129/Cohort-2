const rightClick = document.querySelector(".rightClick");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  rightClick.style.display = "block";
  rightClick.style.left = e.pageX + "px";
  rightClick.style.top = e.pageY + "px";

  console.log("right CLick Detected", e.pageX + "px", e.pageY + "px");
});

window.addEventListener("click", () => {
  rightClick.style.display = "none";
});

const popup = document.querySelector("img");
popup.addEventListener("click", function () {
  console.log("windows wala icon click hua");
});
