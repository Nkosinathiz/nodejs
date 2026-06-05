console.log('Hello Node.js!')

const fs = require('fs')
fs.writeFileSync('notes.txt', 'I live in southaa')

const checkUtils = require('./src/utils.js')

checkUtils()