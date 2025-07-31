//console.log("Hi Hassaan");

//variable in JS
//Variables are containers for data

/*fullName = "Hassaan malik"
age = 24;
radius = 14;
a= null;
y = undefined;
isFollow = true;
console.log(isFollow);
*/

//var: variable can be re-declared and updated. A global scope variable.

//var age = 34;
//var age = 38;
//var age = 22;
//console.log(age);

//let: variable cannot be re-declared but updated. A block scope variable.

//let age = 22;
//age = 33;
//age = 42;
//console.log(age);

//const:  variable cannot be re-declared neither updated.

//const age = 31;
//age = 23 // this gives an error
//console.log(age);

//Datatypes in JS
//1. 7 Primitive Datatypes: Number, string, undefined, null, boolean, bigint,symbol
//2. Non-Primitive Datatypes: Objects
/*const student = {
    fullName : "hassaan malik",
    age: 25,
    grade: "A",
    isPass : true
}
*/

//Practice Question
/*
const product = {
    fullName : "Ball Pen",
    rating : 4,
    offer : 5,
    price: 270
}
console.log(typeof("fullName"));
*/

//Practice Question 2
const profile = {
    username :"@Hassaan Malik",
    posts: 195,
    isFollow: false,
    followers: 124,
    following: 124

}
console.log(typeof profile["isFollow"]);
