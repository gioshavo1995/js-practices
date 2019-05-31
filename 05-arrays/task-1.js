const array = [1,2,3];


function forEach(arr, fun) {
if(arr && Array.isArray(arr) &&  fun && typeof fun === "function") {
    for (let i=0; i<arr.length; i++) {
        fun(arr[i] , i , arr);
    }

}else {
    throw new Error("First parameter required and has to be only array");
}


}

forEach(array, function(item, i, arr) {

});