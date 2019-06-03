function extractCurrencyValue(source) {
    if ( typeof source === 'string') {

        let number = source.slice(1);
        return +number;


    
    }else {
        throw new Error("some input error")
    }
}

extractCurrencyValue('$120'); // 120
