for (let i = 2; i <= 10; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
        }
    }
    if (prime === true) {
        console.log(i);
    }
 }