console.log("Hello World");

var x = 10;
//Compare value of x 
if(x < 100){
    console.log("x is less than 100");
}
// make sure to use double equals instead of single equals when doing a comparison
if( x == 100){
    console.log("x is equal to 100")
}

//for loop example

for(var i = 0; i < x; i++) {
    console.log("i");
}

// introduce query selector functionality
var header = document.querySelector("#first-header");
header.textContent = "here is some change header text"; 

//find all matches querySelectorAll 
document.querySelectorAll('.special-text').forEach(function(element){
    //for every elemnt that matches remove the special element class
    element.classList.remove('special-text');
    element.classList.add("custom-text");
});