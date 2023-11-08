let array = Array.from({ length: 100000 }, () => { Math.floor(Math.random() * 100000) })

const bubbleSort = (arr) => {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j + 1] < arr[j]) {
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