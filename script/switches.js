var grade = "center";

switch(grade){
    case "A","a":
        console.log("You did greate !");
        break;

    case "B","b":
        console.log("You did good!");
        break;

    case "C","c":
        console.log("You did okay");
        break;
    
    case "D":
        console.log("You ... did not do that well!");
        break;
    
    case "F":
        console.log("YOU FAILED!");
        break;
    
    default:
        console.log(grade, "Is not a letter greate")
}