let a=10;
console.log(a);

let b=[1,2,3,4,5];
console.log(b);
console.log("hello");

// variables
c=20;
var d=30; // function scope
let e=50; // block scope

function fun(){
    let a=5;
    if(a===5){
        f=100;
        console.log("Inside",f);
    }
    console.log("Outside",f);
}
fun();
console.log("Global",f);

square_root(10);
function square_root(n){
    console.log("in second sqrt fn");
    return ;
}

// Function Hoisting
var sqrt_n=function(){
    console.log("in second sqrt fn")
    return;
}
sqrt_n(10);