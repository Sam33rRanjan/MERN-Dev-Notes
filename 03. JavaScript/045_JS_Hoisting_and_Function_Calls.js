// Hoisting means moving the var and function declarations to the top of the code.
// Function declarations are hoisted along with their definitions.
// Function expressions are not hoisted.
// let and const are not hoisted.
// var is hoisted.

console.log(temp1); // undefined as only the declaration is hoisted
var temp1 = 10;

fun1(); // Hello as function declaration along with its definition is hoisted
function fun1()
{
    console.log("Hello");
}

// console.log(temp2); // ReferenceError: Cannot access 'temp2' before initialization
let temp2 = 20;
// console.log(temp3); // ReferenceError: Cannot access 'temp3' before initialization
const temp3 = 30; 

// fun2(); // ReferenceError: Cannot access 'fun2' before initialization
let fun2 = function()
{
    console.log("Hi");
}

console.log(fun22); // Unndefined as only the declaration is hoisted
var fun22 = function()
{
    console.log("Hola");
}

// Why is function called first-class citizen in JavaScript?

// Functions can be stored in variables.
let fun3 = function()
{
    console.log("Hey");
}

// Functions can be passed as arguments to other functions.
function fun4(fun)
{
    fun();
}
function fun5()
{
    console.log("Hola");
}
fun4(fun5);

// Functions can be returned from other functions.
function fun6(num)
{
    return function(num)
    {
        return num*num;
    }
}
let fun7 = fun6(5);
console.log(fun7(10));

// Functions can be stored in objects.
let obj = {
    name: "Ali",
    height: "5ft 10inch",
    greet: function(){
        console.log("Hello, " + this.name);
    }
}
obj.greet();

// Functions can be stored in arrays.
let arr = [
    function(a, b)
    {
        return a+b;
    },
    function(a, b)
    {
        return a-b;
    },
    function(a, b)
    {
        return a*b;
    },
    function(a, b)
    {
        return a/b;
    }
]
let add=arr[0];
console.log(add(10, 20));