function closures() {
    let x = 10;
    let y = 20;

    return function() {   // This inner function forms a closure
        let c = x * y;
        console.log(c);
    };
}

let multiply = closures();  // closures() returns the inner function
multiply();  // Output: 200
