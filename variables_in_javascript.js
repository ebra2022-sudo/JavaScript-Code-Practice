// this code is all about variables in javascript

/**
 * Javascript have three kinds of variable declaration 
 * based on how we control the variable's initaization and reassigning logic
 */


// var (Function-Scoped, Can Be Reassigned & Redeclared)

// we can redeclare the var variable with another "var" declaration but not "let" and "const"
// we can reassign var to another value
var n = "Muhammed"; 
var n = "Ali"; // global variable declarion accessed golobaly and locally inside any block
console.log(n);
n = 12;
console.log(n);

// var is function scoped whatevere we declare variable inside nested
// block within the function scope we can access it in side the outer
// scope with in the function scope
// intialized with undefined when it is not initialized

function example_var() {
    console.log(a); // prints undefined if it accessed before declaration
    console.log(n); // accessing top level variable
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

example_var()

// so hoisting(accessing before declaration) and declarion without
//  initalization the varible conisded as undefined

/*
Issues with var:
Not block-scoped, which can cause unintended errors.
Hoisting can lead to undefined values if accessed before assignment.
 */


// let (Block-Scoped, Can Be Reassigned but Not Redeclared)

/*
Characteristics:
Block-scoped: Only accessible inside the {} block where it is declared.
Hoisted but not initialized (Cannot access before declaration → ReferenceError).
Cannot be redeclared in the same scope.
Can be reassigned.
 */

function example_let() {
    if (true) {
        let y = 20;
        console.log(y); // ✅ Works within block
    }
    // console.log(y); ❌ ReferenceError (block-scoped)
}

example_let();

let b = 10;
// let b = 20; ❌ SyntaxError: Identifier 'b' has already been declared
b = 30; // ✅ Allowed
console.log(b); // 30

