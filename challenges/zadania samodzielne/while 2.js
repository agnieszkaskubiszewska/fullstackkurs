let arr = [1,2,3,4,5,6,7,8,9,10];

let i = 0;
let count = 1;

while (i < arr.length){
    if( arr[i] > 4){
        count = arr[i] * count
    }
    i++
}

console.log(`Number of reason why I hate math is ${count}`)