// const nums = [12,12,76,90];
// const sum =nums.reduce((acc,curr) =>{
//     return acc + curr;
// },0);
// console.log(sum)

let arr =[-2,3,5,8,-9]
const ans = arr.map(i=>i+2);
 console.log(ans);

 const ans2 = ans.filter(i => i>0)
 console.log(ans2)

 const ans3 = ans2.reduce((sum,item) => sum + item)
 console.log(ans3)

