let pianoContainer = document.querySelector("#piano-container");
let pianoBtns = document.querySelectorAll(".key");
let h2 = document.querySelector("h2 span");
const keyMap = {
  a: "C1",
  s: "D1",
  d: "E1",
  f: "F1",
  g: "G1",
  h: "A1",
  j: "B1",
  k: "C2",
  l: "D2",
  z: "E2",
  q: "F2",
  w: "G2",
  e: "A2",
  r: "B2",
  t: "C3",
  y: "D3",
  u: "E3",
  i: "F3",
  o: "G3",
  p: "A4",
  m: "B4",
};

pianoBtns.forEach((key) => {
  key.addEventListener("click", (dets) => {
    const note = key.dataset.note;
    const sound = new Audio(`sounds/${note}.mp3`);
    sound.play();
    console.log(key.dataset.note);
    h2.textContent = key.dataset.note;
  });
});
document.addEventListener("keydown", (dets) => {
  const note = keyMap[dets.key.toLowerCase()];
  if (!note) return;

  const sound = new Audio(`sounds/${note}.mp3`);
  sound.play();
  h2.textContent = dets.key;
});

// ..... this is for cheaking what print on key press
// console.log(dets.target.innerHTML);
// console.log(`sounds/${note}.mp3`);
// console.log(dets.key);
