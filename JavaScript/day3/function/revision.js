// 1: Create a Simple Function
// Problem
// Create a function that greets a user.
// Expected output:
// Hello Sameer

function greets(name) {
    console.log("hello "+name)
}
    greets("vishal");


// 2: Calculate Total Price
// Problem
// An e-commerce website needs to calculate the total price.
// Example:
// price = 500
// quantity = 3
// Expected output:
// 1500

function totalPrice (price , quantity){
    return price*quantity;
}
console.log(totalPrice(500,3))

// 3: Default Parameters
// Problem
// A food delivery app charges ₹40 delivery fees by default.
// If no fee is provided, use ₹40.

function deliveryChar (amount,fee = 40){
    return amount + fee;
}
console.log(deliveryChar(500));
console.log(deliveryChar(100,10))

// 4: Check Eligibility
// Problem
// Create a function that checks whether a user can vote.

function checkEli(age){
    if(age<=18){
        console.log("Eligibl for vote")
    }else{
        console.log("Not eligibl")
    }
}
console.log(checkEli(20));
console.log(checkEli(12));

// 5: Function Expression
// Problem
// Create a discount calculator using a function expression.


// 6: Arrow Functions
// Problem
// Create a function that converts rupees to dollars.


// 1: Create and Access Object Properties
// Problem
// Create an object representing a student.
// Store:
// name
// age
// class
// city
// Print:
// Name: Sameer
// Age: 21

let student = {
    name: "vishal",
    last: "koshal",
    age: 19,
    sem:5 ,
    course:"BCA",
    skill:"html",
    city: "null"

 }
 console.log(student)
 
// 2: Update Object Properties
// Problem
// A user updates their profile.
// Change:
// city → Delhi
// age → 22
student.city = "Delhi";
console.log(student);
student.age = "22";
console.log(student);


// 3: Add and Delete Properties
// Problem
// An e-commerce app stores customer details.
// Add:
// phone
// Delete:
// temporaryToken
