class MyString {
    reverse(str) {
        let splitString = str.split("");
        let reverseString = splitString.reverse();
        let joinString = reverseString.join("");
        return joinString;
    }

    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    ucWords(str) {

    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}
}


let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'