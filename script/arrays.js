
// array =  a special variable, 
//          that can hold more than one value.

//          Each "space" is known as an element

//          You access elements in an array by referring
//          to the index number ex.[0]


var cars = ["Mustang", "Corvette", "Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);


cars.push("Tesla");//add an element
cars.pop();//remove last element
cars.push("BMW");

console.log(cars[3]);

var numberOfCars = cars.length;//return lenth of arrays

//cars = cars.sort();//sorts arrays alphabetically/number
//cars = cars.reverse();//reverse sort an array


var lastCar = cars[cars.length-1];

console.log(cars);
console.log(numberOfCars);
console.log(lastCar);