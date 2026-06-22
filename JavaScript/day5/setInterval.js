

// setInterval(function (){
//     console.log("time se class me aao")
// },100)

// let count = 5;
// const timer = setInterval(() =>{
//     console.log(count);
//     count--;
//     if (count <0){
//         clearInterval(timer);
//     }
// },1000,)

// let count = 15;
// const timer = setInterval(() =>{
//     console.log(count);
//     count--;
//     if (count <0){
//         clearInterval(timer);
//     }
// },1000,)


// Digital clock
setInterval(() =>{
    
let t = new Date();
console.log(t.toLocaleTimeString())
},1000)