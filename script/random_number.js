// Math.random() = generates a pseudo-random between 0 and 1
//                 Don't use this for security purposes

var randNum;

// randNum = Math.random() //0 - 1
// randNum =  Math.floor(Math.random() * 6); // 0 - 5
// randNum =  Math.floor(Math.random() * 6) + 1; //1 - 6

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1))
}

randNum = getRandomNum(1, 1000000);
console.log(randNum);

randNum = getRandomNum(1, 2000000);
console.log(randNum);

randNum = getRandomNum(1, 3000000);
console.log(randNum);