const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

// Convert JavaScript object into JSON 
const bookJSON = JSON.stringify(book)

const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title) //Print: Ego is the enemy