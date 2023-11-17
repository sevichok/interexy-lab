import getCharacters from "./api";
import "./styles.css";

const cube3 = document.getElementById("cube3");
const cube4 = document.getElementById("cube4");
const row4 = document.getElementById("row4");

getCharacters().then((array) => console.log(array.length));

const worker = new Worker(new URL("../src/worker.ts", import.meta.url));

const move3 = (elem: HTMLElement) => {
  setTimeout(() => {
    elem.classList.add("up");
  }, 0);
  setTimeout(() => {
    elem.classList.add("down");
    elem.classList.remove("up");
  }, 4000);
  elem.classList.remove("down");
  if (cube3) {
    setTimeout(() => {
      move3(cube3);
    }, 8000);
  }
};
if (cube3) {
  move3(cube3);
}

let position = 0;
let direction = "right";
let width: number;
if (row4) {
  width = row4.offsetWidth;
}

function move4() {
  if (!cube4) {
    return;
  }
  if (direction == "right") {
    position += 2;
    cube4.style.transform = `translateX(${position}px)`;
    if (position > width - 20) {
      direction = "left";
    }
  }
  if (direction == "left") {
    position -= 2;
    cube4.style.transform = `translateX(${position}px)`;
    if (position == 0) {
      direction = "right";
    }
  }
  requestAnimationFrame(move4);
}
window.requestAnimationFrame(move4);

console.log("ts with webpack");
