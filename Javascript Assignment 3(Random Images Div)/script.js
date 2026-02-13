let main = document.querySelector("main");
let btn = document.querySelector(".btn");

btn.addEventListener("mousemove", () => {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  imgDiv.style.height = "80px";
  imgDiv.style.width = "80px";
  imgDiv.style.position = "absolute";
  imgDiv.style.left = x + "%";
  imgDiv.style.top = y + "%";
  imgDiv.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  main.appendChild(imgDiv);
});
