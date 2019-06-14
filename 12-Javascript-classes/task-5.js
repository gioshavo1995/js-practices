class Validator {
    isEmail(email) {
        if (email.indexOf("@")) {
            let splitEmail = email.split('@').pop();
            if (splitEmail.indexOf(".")) {
                return true;
            }
        } else {
            return false;
        }
    }
 
    isDomain(domain) {
        let domainArr = ['.com', '.ge', '.org', '.net'], domainTrue;
        for (let i = 0; i < domainArr.length; i++) {
            if (domain.indexOf(domainArr[i]) !== -1) {
                domainTrue = true;
            } else {
                domainTrue = false;
            }
        }
        return domainTrue;
    }
 
    isDate(date) {
        if (date.indexOf('.') === 2 && date.lastIndexOf('.') === 5 && date.substring(0, 2) <= 31 && date.substring(3, 5) <= 12) {
            return true;
        } else {
            return false;
        }
    }
 
    isPhone(num) {
        let substring1 = num.substring(0, 4);
        let substring2 = num.substring(4);
        let numOfNums = substring2.replace(/[^0-9]/g, "").length;
        return (substring1.indexOf('+995') === 0 && numOfNums === 9) ? true : false;
    }
 }
 
 var validator = new Validator();
 
 console.log(validator.isEmail('jshtml@mail.ru'));
 console.log(validator.isDomain('jshtml.net'));
 console.log(validator.isDate('31.12.2020'));
 console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country