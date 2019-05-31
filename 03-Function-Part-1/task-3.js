const f = function() {
    let sum = 0;
    let result = 0;
    for (argument of arguments) {
        if (typeof argument === 'number') {
            sum = arguments[0] - arguments[1];
            result= sum / arguments[2];
        }else {
            throw new Error("all parameters type should be a Number")
        }
        
    }
    console.log(result);
    return(result);
};

f(3,2,1);