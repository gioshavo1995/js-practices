class MyString {
    reverse(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) { 
            newString += str[i]; // or newString = newString + str[i];
        }
        return newString;
    }

    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    ucWords(str) {

        let splitStr = str.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = this.ucFirst(splitStr[i]);

    }
    return splitStr.join(' '); 
}
}


let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcFe abFde')); // print 'Abcde Abcde Abcde'