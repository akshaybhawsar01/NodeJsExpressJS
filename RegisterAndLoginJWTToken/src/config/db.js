const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/');

async function main() {
    return await mongoose.connect(`mongodb://localhost:27017/`);
}

main().then((d) => {
    console.log("Connected")
})

exports.mongoose = mongoose