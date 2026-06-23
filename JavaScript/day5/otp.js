function Number (num){
    return new Promise ((res,rej) =>{
        console.log("Apka number verify ho raha hai");
        setTimeout(() =>{
            if(num =="9329749949"){
                console.log("number verified")
                res(1898);
            }
        },2000)
    })
}
function verfyOTP (userOtp, actualOTP){ 
return new Promise ((res,rej) =>{
        console.log("Apka number verify ho raha hai");
        setTimeout(() =>{
            if(userOtp == actualOTP){
                console.log("Welcome")
                res();
                
            }else{
                rej("Aap paraye ho")
            }
        },2000)
    })
}    

async function login() {
    try{
        const otp = await Number(9329749949)
        // console.log(otp);
        const welcome = await verfyOTP(1898,otp)
    }
    catch(err){
        console.log(err)
    }
}

login()