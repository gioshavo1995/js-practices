
var f = function() {
    var sum = 0;
    for (argument of arguments) {
        if (typeof argument === 'number') {
            sum = sum + argument;
        }else {
            throw new Error("all parameters type should be a Number")
        }
        
    }
    console.log(sum);
};

f(1, 4, 4);