for(let i=0;i<10;i++){
    console.log("Sameer");
}

for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=5;i>=1;i--){
    console.log(i);
}

for(let i=1;i<=5;i++){
    console.log(i);
    if(i==3){
        break;
    }
}

for(let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let j=5;
while(j>=1){
    console.log(j);
    if(j==3){
        break;
    }
    j--;
}

let k=1;
while(k<=5){
    if(k==3){
        k++;
        continue;
    }
    console.log(k);
    k++;
}

let l=1;
do{
    console.log(l);
    l++;
}while(l<=5);

let firstName="Sameer Ranjan";
console.log(typeof(firstName));
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.substring(7));
console.log(firstName.substring(7,12));

let words=firstName.split(" ");
console.log(words);
console.log(words.join("-"));

// firstName="Sameer 
// Ranjan"; //This will give an error
firstName=`Sameer
 Ranjan
  Sahu`;
console.log(firstName);

let str=new String("Sameer Ranjan Sahu");
console.log(str);

let op1="English ";
let op2="Maths ";
let op3=op1+op2;
console.log(op3);
let op4=`${op1} ${op2}`;
console.log(op4);