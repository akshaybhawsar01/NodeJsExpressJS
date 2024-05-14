
const mongoose = require('mongoose')

async function main() {
    return await mongoose.connect(`mongodb://localhost:27017/`);
}

let A = main();

A.then((data) => {
    console.log("connected")
}).catch(e => {
    console.log("not connected")
})