let arr = [-1,-2,4,5];
let sum = 0;

for(let i=0; i<arr.length; i++) {
    if(arr[i] >= 0) {
        sum= sum + arr[i];
    }
}

console.log(sum);