const fs = require("fs")
const path = require("path")

const data = fs.readdirSync(path.join(__dirname + '/files'))

console.log(data);