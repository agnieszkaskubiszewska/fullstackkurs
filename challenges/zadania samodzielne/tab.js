const tab = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];
let sum = 0
for( let i = 0; i < tab.length; i++){
    let num = tab[i];
     sum = num + sum;
     if(num > 0) console.log(num);
}
