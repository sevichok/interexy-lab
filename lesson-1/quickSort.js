let array = Array.from({ length: 100000 }, () => { Math.floor(Math.random() * 100000) })

// const quickSort = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     } else {
//         let pivotIndex = Math.floor(arr.length / 2)
//         let pivot = arr[pivotIndex]
//         arr.splice(pivotIndex, 1);
//         let leftArr = arr.filter(el => el <= pivot)
//         let rightArr = arr.filter(el => el > pivot)
//         return quickSort(leftArr).concat(pivot, quickSort(rightArr))
//     }
// }

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    } else {
        let pivotIndex = Math.floor(arr.length / 2)
        const pivot = arr[pivotIndex]
        const leftArr = []
        const rightArr = []
        for (let elem of arr) {
            if (pivot === elem) {
                continue
            }
            if (pivot > elem) {
                leftArr.push(elem)
            }
            if (pivot < elem) {
                rightArr.push(elem)
            }
        }
        return quickSort(leftArr).concat(pivot, quickSort(rightArr))
    }
}

const start = new Date().getTime();
quickSort(array)
const end = new Date().getTime();
console.log(`QuickSort: ${end - start}ms`);
