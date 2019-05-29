var  arr = [5,1,10,2,4,3];
var c = 0;
 
 for (var i = 0; i < arr.length; i++) {

    for (var j = i; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            c = arr[j];
            arr[j] = arr[i];
            arr[i] = c;
        }
    }
 }
 console.log(arr);