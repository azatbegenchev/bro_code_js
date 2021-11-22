/*
    A function is a block of code designed to perform, a particular task/procedure. 
    We invoke "call" the function whenever we want it to do something. 
    However, we need to define what the task the function should do
*/
/* =======================================================*/
// function sayHello(name,age){
//     console.log("Hello", name);
//     console.log("You are",age,"years old");
//     };

// var myName = "Azat";

// sayHello(myName,39);

/*===========================================================*/
// return functions

function toCelsius(f){
    return (f-32) * (5/9);
};

function toFarenheit(c){
    return(c * 9/5) + 32;
}

var myTemp = toFarenheit(5);

console.log("My temp in C is", myTemp,"degress");