// const price = [1000,2000,3000];
// const discount = price.map(i =>(i- i*10/100))
// console.log(discount)

// 2

const users = [
    {
        id:1,
        name:"Vishal",

    },
    {
        id:2,
        name:"Rahul"
    },
    {
        id:3,
        name:"Amit"
    }
]
users.forEach(i =>{
    console.log(i.name)
});

// 3

const product = [
    {
        name:"Milton ",
        price:2319
    },
    {
        name:"laptop",
        price: "7cr"
    }
]
const item = product.map(i=>(i.name+ i.price))
console.log(item)


// filter 1
const product1 = [
    {
        name:"Milton ",
        price:2319
    },
    {
        name:"laptop",
        price: "7cr"
    }
]
console.log(product1)

// 2
const users = [
    {
        name:"vishal",
        active:true
    },
    {
        name:"raj",
        active:false
    }
]
