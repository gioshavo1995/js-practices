const array = [1,2,3];
let number = 0;



function filter(arr, fun) {
if(arr && Array.isArray(arr) &&  fun && typeof fun === "function") {
    for (let i=0; i<arr.length; i++) {
        if(fun(arr[i] , i , arr)) {
            let newarray= [];
            newarray.push(arr[i]);
        };
    }
    console.log(newarray);

}else {
    throw new Error("some error");
}


}

filter(array, function(item, i, arr) {
    return item > 2;
});