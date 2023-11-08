let array = Array.from({ length: 100000 }, () => { Math.floor(Math.random() * 100000) })

const combSort = (arr) => {
    const factor = 1.247;
    let gapFactor = arr.length / factor;
    do {
        const gap = Math.round(gapFactor);
        for (let i = 0, j = gap; j < arr.length; i++, j++) {
            if (arr[i] > arr[j]) {
                const swapElem = arr[i]
                arr[i] = arr[j]
                arr[j] = swapElem
            }
        }
        gapFactor = gapFactor / factor;
    } while (gapFactor > 1)
    return arr;
};

const start = new Date().getTime();
combSort(array)
const end = new Date().getTime();
console.log(`CombSort: ${end - start}ms`);