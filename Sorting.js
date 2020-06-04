let a = [3,5,6,7,8];
let b = [1,2,4,9,10];

let c = [...a, ...b];

for(let i = 0; i < c.length; i++){
    c.sort();
}

console.log(c);