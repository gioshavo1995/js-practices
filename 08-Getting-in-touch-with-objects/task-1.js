const person = {
    salary: 1500
 };
 
 Object.defineProperty(person, 'salary', {
    get() {
        let g = new Date();
        let t = new Date(g.getFullYear() , g.getMonth() + 1, 0).getDate();
        
        if(g.getDate()+20 < t) {
            return 'good salary';
        }else{
            return 'bad salary';
        }

    },
 });
 
 person.salary;
    
