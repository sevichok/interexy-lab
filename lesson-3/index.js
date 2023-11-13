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

let array = Array.from({ length: 50000 }, () => { Math.floor(Math.random() * 50000) })

// const bubbleSort = (arr) => {
//     return new Promise((resolve) => {
//         const length = arr.length
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length; j++) {
//                 if (arr[j + 1] < arr[j]) {
//                     const swapElem = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = swapElem
//                 }
//             }
//         }
//         return resolve(arr)
//     })
// }
const promise = async () => await new Promise((resolve) => resolve(1))
const promise2 = async (ms) => await new Promise((resolve) => setTimeout(resolve(1), ms))

const bubbleSort = (arr) => {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j + 1] < arr[j]) {
                promise2(0).then()
                const swapElem = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = swapElem
            }
        }
    }
    return arr
}

const start = new Date().getTime();
bubbleSort(array)
const end = new Date().getTime();
console.log(`BubbleSort: ${end - start}ms`);