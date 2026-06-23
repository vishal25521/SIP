// function good (){
//     return new Promise((res, rej)=>{
//         res("hello")
//     })
// }
// good().then((msg)=>{
//     console.log(msg)
// })

// function greet() {
//     return new Promise((res, rej) => {
//         let delivered = false;
//         if (delivered) {
//             res("deliver ho gaya");
//         } else {
//             rej("deliver nahi hua");
//         }
//     })
// }


// async function print() {
//     try {
//         const msg = await greet();
//         console.log(msg); 
//         console.log("hello");
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// print()


let connnectin = new Promise ((res,rej) =>{
    console.log("connect ho raha hai db se...")
    console.log("thoda wait kro...")
    setTimeout(()=>{
        console.log("connect ho ")
        res()
        res("connect ho")
    },3000)
})
connnectin
.then((msg)=>{
    console.log(msg,"mere promise fullfilled ho gaya hai");
})
.catch(() =>{
    console.log()
})