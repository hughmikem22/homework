console.log('Hello World');

var cheeseburger=('well maybe you have figured it out');
console.log(cheeseburger);
var Steppenwolf=('Time to play the game');
console.log(cheeseburger,Steppenwolf);
var Digits=(78);
var Franklin=(true);

console.log(Digits,Franklin);

let Jason = "Terrifying";
let Freddie = "Horror";
const element = "water";

console.log(Jason, Freddie, element);

let digits2 = 333;
let digits3 = 33;

let digits4 = 8.9; // float, or decimAL, limit is 16 characters

let adding = digits4 + digits3;
let subtracting = Digits - digits3;
let multiplying = digits3*digits4;
console.log(subtracting);

console.log(adding);

console.log(multiplying);

// comparison equation boolean = false
console.log(digits2 < digits3);

// comparison equation boolean = true
console.log("Terrifying" == Jason);

let String_list = ['Honda','Lexus','Toyota','BMW','Mercedes-Benz'];
let digitsList = [344,756,978,275];

// log for arrays

console.log(String_list);
console.log(digitsList);

// arays functions 

for (let x = 1; x < String_list.length; x++) {
    console.log(x);
    console.log(String_list[x]);

}

// .push
String_list.push('Chevrolet');
console.log(String_list); 

// .splice
String_list.splice(2,2);
console.log(String_list);

// .reverse

String_list.reverse();
console.log(String_list);

// variable check / retirieving the type of data or variable in use
console.log(typeof digits2);
console.log(typeof Franklin);
console.log(typeof Jason);
console.log(typeof String_list);

// string interpolation

let Yancey = 667;
console.log(`yancey is ${Yancey}`);

console.log(`My favorite vehicle is ${String_list[1]}`);

//string concatination or adding strings together
console.log(Jason + Freddie);
console.log('grapes'+ 'juice');