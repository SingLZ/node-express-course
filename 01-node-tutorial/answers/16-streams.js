const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {encoding: 'utf8'}, { highWaterMark: 200 })

let count = 0;

stream.on('data', (result) => {
    conut++;
    console.log(result);
})

stream.on('end', () => {
    console.log(`Total Count: ${count}`);
    console.log(count);
})

stream.on('error', (err) => console.log(err))
