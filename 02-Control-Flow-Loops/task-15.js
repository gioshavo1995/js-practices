let n = 1000;
let i = 0;
let j = 0;
let num = 0;
while (i<=n) {
    if(n/2 > 50) {
        n=n/2
        num=n;
        j++;
    }else {
        break;
    }
    i++;
   
}
console.log(num);
console.log(j);