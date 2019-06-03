function truncate(string, maxlength) {
    if ( typeof string === 'string' && typeof maxlength === 'number') {

        let string2 = string.substring(0 , string.length - 3); 
        let string3 = string2 + '...';
        console.log(string3);
        console.log(string.length);
        return string3;

    
    }else {
        throw new Error("some input error")
    }
}



truncate('I wanna to say next thing about this topic', 22); // 'I wanna to say next...