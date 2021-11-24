var symbol = window.prompt("Enter a symbol for use");
var rows = window.prompt("Enter # of rows");
var colums = window.prompt("Enter # of columns");

for (let i = 0; i < rows; i++) {

    for (let j = 0; j < colums; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}