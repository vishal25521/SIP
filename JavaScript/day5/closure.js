// function init(){
//     var name = " Vishal";
//     function disName(){
//         console.log(name);
//     }
//     disName();
// }
// init();

// function outer(){
//     var x =1;
//     function inner(){
//         x++;
//         console.log(x)
//     }
//     inner();
// }
// outer();
// outer();
// outer();

function outer(){
    var x =1;
    console.log(x);
    function inner(){
        x++;
        console.log(x)
    }
    return inner;
}
const ans = outer();
ans();
ans();
ans();