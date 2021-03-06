const getCustomers = (customer) => {
    let merge = [];

    return new Promise((resolve, reject) => {
    
        for(let i=0; i<customer.length; i++){

            for (let j=0; j<countries.length; j++){

                if (customer[i].id === countries[j].id) {
                    if (customer[i].verified) {
                        merge.push(Object.assign(customer[i], countries[j]));
                    }
                    resolve(merge);
                } else {
                    reject(`We don't have information about country for this customer: ${customer[i].name}`);
                }


            }
        }

        
    });
};

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))