const cube3 = document.getElementById('cube3')
const row3 = document.getElementById('row3')
const cube4 = document.getElementById('cube4')
const row4 = document.getElementById('row4')

const move3 = (elem) => {
    setTimeout(() => {
        elem.classList.add('up')
    }, 0);
    setTimeout(() => {
        elem.classList.add('down')
        elem.classList.remove('up')
    }, 4000);
    elem.classList.remove('down')
    if (cube3) {
        setTimeout(() => {
            move3(cube3)
        }, 8000)
    }
}
move3(cube3)

let position = 0;
let direction = 'right';
let width = row4.offsetWidth

function move4() {
    if (direction == 'right') {
        position += 2
        cube4.style.transform = `translateX(${position}px)`
        if (position > width - 20) {
            direction = 'left';
        }
    }
    if (direction == 'left') {
        position -= 2
        cube4.style.transform = `translateX(${position}px)`
        if (position == 0) {
            direction = 'right';
        }
    }
    requestAnimationFrame(move4)
}
window.requestAnimationFrame(move4);

// const promise = async (ms) => await new Promise((resolve) => setTimeout(resolve(1), ms));
// const promise2 = async () => await new Promise((resolve) => resolve(1));
const worker = new Worker('worker.js')