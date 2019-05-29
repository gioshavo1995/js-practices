function f(number) {
    if (typeof number === 'number') {
       console.log(number * number * number)
    }else{
        throw new Error("parameter type is not a Number")
    }
};

f(1);

