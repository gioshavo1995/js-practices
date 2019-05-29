var f = function(number) {
    var sum = 0;
    var days= ['ორშაბათი', 'სამშაბათი' , 'ოთხშაბათი' , 'ხუთშაბათი' , 'პარასკევი', 'შაბათი' , 'კვირა'];
    if (typeof number === 'number')  {

        if(number >= 1 && number <=7 ) {
        
        console.log(days[number-1]);
        } else {
            throw new Error("parameter should be in the range of 1 to 7")
        }
    } else {
        throw new Error("parameter type is not a Number")
    }
  
};

f(2);