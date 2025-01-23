//Objects
let obj = {
    name: "M. Ali",
    "full name": "Muhammad Ali",
    age: 25,
    height: "5ft 10inch",
    greet: function(){
        console.log("Hello, " + this.name);
    }
}
console.log(obj);
console.log(obj.name);
obj.greet();
for(let key in obj)
{
    console.log(key, obj[key]);
}

//Arrays
let arr = [10, 20, 30, 40, 50];
console.log(arr);

let brr= ["Ali", 25, "5ft 10inch", true];
console.log(brr);
console.log(brr[0]);
console.log(brr.slice(2,4));
brr.splice(2, 2, "Pakistan");
console.log(brr);

let crr= new Array(10, 20, 30, 40, 50);
console.log(crr);
crr.push(60);
console.log(crr);
crr.pop();
console.log(crr);
crr.shift();
console.log(crr);
crr.unshift(10);
console.log(crr);

let drr = [10, 20, 30];
let err=drr.map((number) => {
    return number * number;
})
console.log(err);
drr.map((number,index) => {
    console.log(index, number*2);
})

let frr= [10, 20, 30, 40, 50, 51, 53, 55, 57];
let grr = frr.filter((number) => {
    return number > 50;
})
console.log(grr);
let hrr = frr.filter((number) => {
    return number % 2 === 0;
})
console.log(hrr);
let irr = frr.filter((number) => {
    if(number % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
})
console.log(irr);

let jrr = [10, 20, 30, 40, 50];
let krr = jrr.reduce((acc, curr) => {
    return acc + curr;
})
console.log(krr);
let lrr = jrr.reduce((acc, curr) => {
    return acc + curr;
}, 100)
console.log(lrr);

let mrr = [50, 20, 10, 40, 30];
mrr.sort();
console.log(mrr);
mrr.sort((a, b) => {
    return b - a;
})
console.log(mrr);
console.log(mrr.indexOf(40)); 

let nrr = [10, 20, 30, 40, 50];
nrr.forEach((number, index) => {
    console.log("Index : " , index , " Number : " , number);
})

let surname = "Ali";
for(let val of surname)
{
    console.log(val);
}