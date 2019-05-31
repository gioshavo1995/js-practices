const array = [1,2,3];

function every(arr, fun) {
    if (arr.length && Array.isArray(arr) && fun && typeof fun === "function") {
        var something = false;
        for (var i = 0; i < arr.length; i++) {
            if(fun(arr[i], i, arr)){
                something = true;
            }
        }
        console.log(something);
        return something;
    } else {
        throw new Error("Please enter correct arguments");
    }
}

every(array, function(item, i, arr) {
    return item > 5;
});