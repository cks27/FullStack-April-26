const fsp = require('node:fs/promises');

// const promise1 = fsp.readFile('abc.txt', { encoding: 'utf-8' });

// promise1
//     .then((data) => {
//         console.log(data);
//     })


// ---------------------------------------

const file1Promise = fsp.readFile('inp1.txt', { encoding: 'utf-8' });
const file2Promise = fsp.readFile('inp2.txt', { encoding: 'utf-8' });


// parallel
Promise.all([file1Promise, file2Promise])
    .then((result) => {
        const allNums = [];
        for (let data of result) {
            allNums.push(...data.split('\n'));
        }   

        // filter out all the valid numbers, remove empty spaces
        const cleanedNums = allNums.filter((val)=> val.trim().length!==0)

        // sort the numbers
        cleanedNums.sort((a, b) => parseInt(a) - parseInt(b));
        
        const data = cleanedNums.join("\n");

        return fsp.writeFile('output.txt', data);
    })
    .then(() => {
        console.log('File writtenn successfully');
    })



