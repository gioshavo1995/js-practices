function f() {
  console.log('hello');
}

  Function.prototype.delay = function (t) {
    return (...args) => setTimeout(() => {
        this(...args)
    }, t)
}

f.delay(1000)(); // print "hello" after 1 second

// or with parameters:
function f2(a, b) {
  console.log(a + b);
}
f2.delay(1000)(1, 2); // print 3 after 1 second





