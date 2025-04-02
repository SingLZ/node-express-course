const path = require('path')

const filePath = path.join('/content/', 'subfolder', 'test.txt')

const absolute = path.join(__dirname, filePath)
console.log(absolute)