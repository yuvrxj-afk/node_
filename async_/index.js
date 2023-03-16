let a = 20, b = 0

let data = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2)
})

data.then((d) => {
    b = d
    console.log(a + b);
})

console.log(a + b);