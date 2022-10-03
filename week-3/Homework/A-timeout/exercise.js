/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// const myTimeout = setTimeout(myNewColor, 5000);

// function myNewColor() {
//   document.querySelector("body").style.backgroundColor = "#7FFFD4"
// }

let i = 0; 
const colors = ["red", "green", "pink"];
const body = document.querySelector("body");
body.style.backgroundColor = "#7FFFD4";

function changeEvery5sec(){
     body.style.backgroundColor = colors[i];
     i = (i + 1) % colors.length;
}
const newStyle = setInterval(changeEvery5sec, 5000);
