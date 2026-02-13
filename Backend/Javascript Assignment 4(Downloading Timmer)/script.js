let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let innerProgress = document.querySelector(".innerProgress");

btn.addEventListener("click", () => {
  let current = 0;
  let grow = 50 + Math.floor(Math.random() * 50);
  btn.style.pointerEvents = "none";
  btn.style.opacity = "0.2";
  btn.textContent = "Dounloading";

  let int = setInterval(() => {
    current++;
    innerProgress.style.width = current + "%";
    h2.textContent = current + "%";

    if (current == 100) {
      clearInterval(int);
      btn.textContent = "Completed";
      btn.style.opacity = "1";
      console.log(`completed in ${grow / 10} seconds`);
    }

    if (current === 100) {
      setTimeout(() => {
        innerProgress.style.width = 0 + "%";
        h2.textContent = 0 + "%";
        btn.textContent = "Restart";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "initial";
      }, 1000);
    }
  }, 40);
});
