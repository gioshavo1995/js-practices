const person = {
    rate: 1,
    salary: 1
};

Object.defineProperty(person, 'rate', {
   configurable: false,
   enumerable: false
});

Object.defineProperty(person, 'salary', {
   get() {
       let g = new Date();
       if (this.rate) {
           return this.rate * g.getDate();
       } else {
           return 0;
       }
   },
   set () {
       throw new Error('Cant make set');
   }
});


person.rate = 30;
person.salary;
console.log(person.salary);

