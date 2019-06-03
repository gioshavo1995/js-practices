function upperCaseFirst (string) {
    if(typeof string=== "string"){
    let upperse = string.charAt(0).toUpperCase();
    let result = string.substring(1);
    
    console.log(upperse + result);
    return upperse + result;
    }else {
        throw new Error("not a string");
    }
    
}


upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''