// this code is all about variables in javascript

/**
 * Javascript have three kinds of variable declaration 
 * based on how we control the variable's initaization and reassigning logic
 * var : 
 */

// we can redeclare the var variable with another "var" declaration but not "let" and "const"
// we can reassign var to another value
var n = "Muhammed";
var n = "Ali";
console.log(n);
n = 12;
console.log(n);

// var is function scoped whatevere we declare variable inside nested
// block within the function scope we can access it in side the outer
// scope with in the function scope
// intialized with undefined when it is not initialized

function example() {
    console.log(a); // prints undefined if it accessed before declaration
    if (true) {
        var a = 10;
        if(true) {
            var b = "nested varible"
        }
    }
    var s; // initialized as undefined
    console.log(s);
    console.log(a);
    console.log(b);
}

example()

// so hoisting(accessing before declaration) and declarion without
//  initalization the varible conisded as undefined

/*
Issues with var:
Not block-scoped, which can cause unintended errors.
Hoisting can lead to undefined values if accessed before assignment. */