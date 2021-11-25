var myName = "Azat Begenchev";
var myStreet = "2-pr. Lermontowa 13";
var myCity = "Ashgabat Ahal 993";
var myPhone = "99312-90-68-47"


console.log(myName.length);
console.log(myName.charAt(5))
console.log(myName.indexOf("e"))
console.log(myName.lastIndexOf("B"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// var firstName = myName.slice(0, 4);
var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

var lastName = myName.slice(myName.lastIndexOf(" ") +1);
console.log(lastName);

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress)

myPhone = myPhone.replaceAll("-","");
console.log(myPhone);