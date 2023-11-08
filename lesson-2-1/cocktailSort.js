let array = Array.from({ length: 100000 }, () => { Math.floor(Math.random() * 100000) })

const cocktailSort = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    do {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                const swapElem = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = swapElem
            }
        }
        right--;
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                const swapElem = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = swapElem
            }
        }
        left++;
    } while (left < right)
    return arr;
}

const start = new Date().getTime();
cocktailSort(array)
const end = new Date().getTime();
console.log(`CocktailSort: ${end - start}ms`);