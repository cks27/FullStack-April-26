
// async keyword ----------------------

// async function sum(x, y) {
//     if (true) {
//         throw new Error('my custom error message');
//     }
//     return x + y;
// }


// function sum(x, y) {
//     return new Promise((resolve, reject) => {
//         resolve(x + y);
//     })
// }

// const p = sum(2, 3);

// p.then((val) => {
//     console.log(val);
// });
   

// --------------------------------------- await keyword------------

// async function main() {
//     try {
//         const promise = sum(5, 6);
//         const val = await promise;    
//         console.log(val);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// main();

// --------------------------------------Example ----------------




// console.log('START');

// async function multiply(x, y) {
//     return x * y;
// }

// async function fun() {
//     console.log('starting a fun function');
//     const res1 = await multiply(2, 3);
//     console.log(`Value of multiplication of 2 and 3 is ${res1}`);

//     const res2 = await multiply(4, 5);
//     console.log(`Value of multiplication of 4 and 5 is ${res2}`);
// }

// fun();

// console.log('END');

// console.log('After END 1')
// console.log('After END 2')
// console.log('After END 3')
// console.log('After END 4')
// console.log('After END 5')
// console.log('After END 6')
// console.log('After END 7')


// -------------------------------------- fetch ---------------------




// fetch('https://fakestoreapi.com/products/3')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     });

async function fetchProduct() {
    const res = await fetch('https://fakestoreapi.com/products/3');
    const data = await res.json();
    console.log(data);
}

// fetchProduct();

async function fetchProductAxios() {
    const res = await axios.get('https://fakestoreapi.com/products/3');
    console.log(res.data);
}

fetchProductAxios();


