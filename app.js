// const validator = require('validator')

// console.log(validator.isURL('https://www.npmjs.com/package/chalk')) // Print: true

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if(command === 'remove'){
//     console.log('Removing note!')
// }

// const yargs = require('yargs')

// yargs.version('1.1.0')

// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function (){
//         console.log('Adding a new note!')
//     }
// })

// console.log(yargs.argv)

// Argument Parsing with Yargs: Part II 

const { title } = require('node:process')
const { describe } = require('node:test')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

console.log(yargs.argv)

const users = [{
    name: 'Andrew Mead',
    age: 27
}, {
    name: 'George Hudson',
    age: 54
}, {
    name: 'Clay Ckay',
    age: 45
}]

const user = users.find((user) => user.name === 'George Hudson')

console.log(user) // Will print the second name in the array