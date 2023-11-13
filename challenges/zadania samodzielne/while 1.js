let arr = [1,2,3,4,5,6,7,8,9,10];

let i = 0;
let sum = 0

while ( i < arr.length) {
    const el = arr[i];
    sum = sum + el
    i++
}

console.log(`Suma elementow ${sum}`)