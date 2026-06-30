function log (){
    return new Promise ((res,rej) =>{
        console.log("login ho raha hai...");
        setTimeout(()=>{
            console.log("user verfide");
            res{[{
                name:"vishal",
                passward:9898
            }]}
        },4000)
    })
}

function getuser(name){
    return new Promise((res,rej)=>{
        console.log("naam kaya hai..");
        res(name);
    })
}

function getcart (){
    return new Promise((res,rej)=>{
        res{[{
            vimal ,panbahar ,rajshree
        }]}
    ),2000}
}