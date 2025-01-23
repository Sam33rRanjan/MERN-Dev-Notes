function printMyName()
{
    console.log("My Name is M. Ali");
}
printMyName();

function printNums(num)
{
    for(let i=1; i<=num; i++)
    {
        console.log(i);
    }
}
printNums(5);

function printAvg(num1, num2)
{
    let avg = (num1 + num2) / 2;
    console.log("Average : " + avg);
}
printAvg(10, 20);

function getSum(num1, num2)
{
    return num1 + num2;
}

let result = getSum(10, 20);
console.log("Sum : " , result);

let multiply = function(num1, num2)  // Recommended to use const instead of let
{
    return num1 * num2;
}
console.log("Product : " , multiply(10, 20));

// Arrow Function
let divide = (num1, num2) =>{
    return num1 / num2;
}
console.log("Division : " , divide(100, 20));