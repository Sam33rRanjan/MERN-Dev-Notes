var age1=21; //globally accessible
if(true)
{
    console.log(age1);
}

function solve()
{
    var age2=22; //function accessible
    console.log(age2);
}
solve();
// console.log(age2); //error

var x=10;
var x=20; // can be defined again
var x="Sameer"; // can be defined again
console.log(x);


let y=10;
// let y=20; //error

{
    let z=20;
    console.log(z);
    {
        z=30;
        console.log(z);
    }
}

// console.log(z); //error


// JS is a dynamically typed language
let a=11;
console.log(a);
a="Ranjan";
console.log(a);
a=true;
console.log(a);


const b=12;
console.log(b);
// b=13; //error


let num;
console.log(num); //undefined
console.log(typeof(num));
num=13;
console.log(num);
console.log(typeof(num));
num=13.1415;
console.log(num);
console.log(typeof(num));
num="Sahu";
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=12345678995412585455512115545615356214852121465645213564185641356163616516411548654185654156845146456313564185451536464;
console.log(num);
console.log(typeof(num));

