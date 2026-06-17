console.log("morning")
console.log("Afternoon");
console.log("Evening")

setTimeout(() => {
    console.log("vishal")
},3000)

let count =8;
let time = setInterval(()=>{
    console.log("Bhaago bum phootne waala hai")
    console.log(count);
    count--;
    if(count < 1){
        clearInterval(time)
        setTimeout(() =>{
            console.log("Bum phoot ")
        },9000)
    }
}, 1000)

function greet (){
    console.log("Hello")
}
greet();
function greet2 (){
    console.log("Hello ji")
}
greet2();
console.log("good night")

