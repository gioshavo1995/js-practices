var n = 1000;
var i = 0;
var j = 0;
var num = 0;
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