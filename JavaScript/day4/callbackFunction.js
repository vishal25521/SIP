// function greet(){
//     console.log("Hello");
// }
// function processUser (callback){
//     callback();
// }
// processUser (greet); 

// function greet(){
//     console.log("Hello");
// }
// function processUser (callback , name){
//     callback() ;
//     return name;
// }
// processUser (greet , "Vishal"); 
// console.log(processUser (greet , "Vishal"))


// function paymentSuccess(){
//     console.log("Pyment Succesful")
// }

// function paymentProcessing( amount,msg){
//     console.log(`${amount} deducted from your account`)
//     msg();
// }
// paymentProcessing(13000,paymentSuccess);

const product = [
    {
        id: 1,
        name:"Milton ",
        price:2319
    },
    {
        id:2,
        name:"laptop",
        price: "7cr"
    },
    {
        id: 3,
        name:"samsung",
        price:13500
    }
]
// console.log(product);

product.forEach(i =>{
    console.log(i.id,i.name,i.price)
});