let h3 = document.querySelector("h4");
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text = h3.innerHTML;

let iteration = 0;

h3.addEventListener("mouseenter", () => {
  var interval = setInterval(() => {
    const str = text
      .split("")
      .map((char, idx) => {
        if (idx < iteration) {
          return char;
        }
        return string.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");
    h3.innerHTML = str;

    iteration += 0.5;
  }, 40);
});
