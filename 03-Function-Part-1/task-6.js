function isEven(number){
    if ( typeof number === 'number') {

        if(number%2==0){
            return true;
        }else{
            return false;
        }
        
    } else {
        throw new Error('parameter type is not a Number');
    }
 }

 isEven(2);