class MyString {
    reverse(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) { 
            newString += str[i]; // or newString = newString + str[i];
        }
        return newString;
    }

    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    ucWords(str) {

    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i]= this.ucFirst(splitStr[i]);  
    }
    return splitStr.join(' '); 
}
}


let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'