let box = document.querySelector(".box");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let rnd1 = Math.floor(Math.random() * 256);
  let rnd2 = Math.floor(Math.random() * 256);
  let rnd3 = Math.floor(Math.random() * 256);
  console.log(`${rnd1}`);
  box.style.backgroundColor = `rgb(${rnd1},${rnd2},${rnd3})`;
});
