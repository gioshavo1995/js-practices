const isCustomerVerified = (customer) => {
    return new Promise((resolve, reject) => {
        let valid = "Customer is not verified";
        if(customer.verified === true) {
            valid = true;

        }

        return resolve(valid);
    });
};


const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified