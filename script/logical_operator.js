// logical operators =  used to write more
//                                    complex conditions

// && AND (checks if both conditions are true)
// || OR (checks if at least 1 condition is true)
// !  NOT (reverses boolean value)
//=============================================================


var temperature = 16;//Celcius

if ( temperature >30 ) {
    console.log("It's hot now");
    
} else if( temperature > 0 && temperature <=30) {
    console.log("It's warm now");
}

else{
    console.log("It's COLD NOW");
}

// var hour = 5;

// if (hour < 6 || hour >= 20) {
//     console.log("It's dark now");
    
// } else {
//     console.log("It's LIGHT now");
    
// };
// var myName = window.prompt("Enter your name")

// if (!(myName =="")) {
//     console.log("Hello", myName);
// } else {
//     console.log("You did not Enter your name Please enter Your name");
    
// }