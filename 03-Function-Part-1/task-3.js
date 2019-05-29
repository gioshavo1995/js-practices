var f = function() {
    var sum = 0;
    var result = 0;
    for (argument of arguments) {
        if (typeof argument === 'number') {
            sum = arguments[0] - arguments[1];
            result= sum / arguments[2];
        }else {
            throw new Error("all parameters type should be a Number")
        }
        
    }
    console.log(result);
};

f(3,2,5);