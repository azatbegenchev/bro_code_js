var grade = "A";

switch(grade){

    case 'A':
        console.log("You did it greate !")
        break;
    
    case "a":
        console.log("You did it greate!")
    break;

    case "B":
        console.log("You did it good !")
        break;
    case "C":
        console.log("You did it ok !")
        break;
    
    case "D":
        console.log("You did not do that well !")
        break;

    case "F":
        console.log("You FAILED!")
        break;
    
    default:
        console.log(grade,"is it not a latter grade")
}