Object.defineProperty(Object.prototype, 'extend', {
    value(source) {
        for (let item of Object.keys(source)) {

            if (!data.hasOwnProperty(item)) {

            Object.defineProperty(data, item, Object.getOwnPropertyDescriptor(source, item))
        }
        }
    }
 })
 const data = { a: 'a' };
 const source = { a: 'A', b: 'b' };
 
 Object.defineProperty(source, 'b', { writable: false });
data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false