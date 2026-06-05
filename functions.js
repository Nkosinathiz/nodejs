// Arrow functions

// from

// const square = function (x) {
//     return x * x
// }

// --- to

// const square = (x) => {
//     return x * x
// }

// console.log(square(2)) // this will print 4

// to

const squareAlt = (x) => x * x
console.log(squareAlt(2)) // this will print 4

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Thabo', 'Poland'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()