function checkSpam(source, example) {

if ( typeof source === 'string' && typeof example === 'string') {
    let lower = source.toLocaleLowerCase() , lower2 = example.toLocaleLowerCase();
    let sub = lower.indexOf(lower2);

    if(sub !==-1) {
        return true;
    }else {
        return false;
    }

}else {
    throw new Error("not a string");
}

}

console.log(checkSpam('pitterXXX@gmail.com', 'xXx'));

 checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true