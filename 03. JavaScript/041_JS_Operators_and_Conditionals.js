console.log("Binary Operators");
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(2**3);

console.log("Unary Operators");
let a=5;
let b=2;
console.log(a**b);
console.log(a++);
console.log(++b);
console.log(a--);
console.log(--b);
a+=10;
console.log(a);
console.log(a-=10);

console.log("Comparison Operators");
console.log(10>5);
console.log(10<5);
console.log(10>=5);
console.log(5>=5);
console.log(10<=5);
console.log(10==5);
console.log(10!=5);
console.log(10==10);
console.log(10=="10");
console.log(10==="10");
console.log(10!=="10");

console.log("Ternary Operator");
let age1=21;
(age1>=18)?console.log("You are eligible to vote"):console.log("You are not eligible to vote");

console.log("Logical Operators");
console.log(true&&true&&true&&true);
console.log(true&&true&&true&&false);
console.log(true&&true&&false&&true);
console.log(false||false||false||false);
console.log(false||false||false||true);
console.log(false||false||true||false);
console.log(!true);

console.log("Falsy and Truthy values");
console.log(false || 0 || "" || null || undefined || NaN || "Sameer");
console.log(false || 7 || 12 || "Ranjan" || "Sahu" || "Sameer");
console.log(true && 1 && "Ranjan" && "Sahu" && "Sameer");

console.log("Bitwise Operators");
console.log(5&2);
console.log(6&2);
console.log(5|2);
console.log(6|2);
console.log(~0);
console.log(~1);
console.log(2^2);
console.log(4^3);
console.log(5<<1);
console.log(5>>1);

console.log("Conditional Statements");
let age2=62;
if(age2>18){
    console.log("You are eligible to vote");
    if(age2>60){
        console.log("You are senior citizen");
    }
}
else if(age2==18){
    console.log("You will be eligible to vote soon");
}
else{   
    console.log("You are not eligible to vote");
}

let num=3;
switch(num){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Invalid Number");
}