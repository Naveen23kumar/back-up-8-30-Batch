//write a program to read a string from the user and findout the total no of character within it,without using(.length property)

var n = prompt("Enter a string: ");
console.log("the Given string is: " +n);
var count = 0
for(var i = 0; n[i] != undefined; i++) {
    count += 1
}console.log("Total no-of string characters are: " + count)

// write a program total no-of words within in a given string?//

var n = prompt("Enter a string");
console.log("Given string is: "+n);
console.log(n.split(' '));
console.log(n.split(' ').length);
console.log("total number of words are: "+n.length)

///write a program findout total no-of vowels within a given string//?

var n = prompt("Enter a String: ");
n = n.toLowerCase();
var count = 0;
for(var j = 0; j < n.length; j++){
    if(n[j] == 'a' || n[j] == 'e' || n[j] == 'i' || n[j] == 'o' || n[j] == 'u') {
        count++;
    }
}console.log("Given string is: " +n)
console.log("Total no-of vowels are: " +count)

//write a program to check whether the given string is part of the main string or not?//

var string = ["komali", "vani", "rani", 45, 940,];
string = string.includes('vani');
console.log(" is these part of the string?: " +string)
//------------------------------------------------------------------------------------//
var mainstring = prompt("Enter a Mainstring: ");
var substring = prompt("Enter a substring: ");
mainstring.toLowerCase();
substring.toLowerCase();
var string = mainstring.split(' ');
var stringsize = string.length;
var count = 0;
for(var i = 0; i < stringsize; i++) {
    if(string[i] == substring){
        count++;
        break;
    }


}if(count == 1){
    console.log("substring is present in main string")
}else{
    console.log("substring doesn't exist in main string")
}

//write a program to findout total no of digits within a given string?//

var n = prompt("enter a string: ");
var count = 0;
for(var i = 0; i < n.length; i++) {
    if(n[i] == 0 || n[i] == 1 || n[i] == 2 || n[i] == 3 || n[i] == 4 || n[i] == 5) {
        count++;
    }
}console.log("Given string: " +n)
console.log("total no-of digits are: " +count)

//write a program to finout total no-of special symbols within a given array?//




