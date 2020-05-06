
    // OBJECT DESTRUCTURING
    
    
// const person = {
//     name: 'Ardeshir',
//     age: 39,
//     location: {
//         city: 'Frankfurt',
//         temp: 55
//     }
// }

// const { name: firstname = 'Anonymous', age } = person

// // const name = person.name
// // const age = person.age

// console.log(`${firstname} is ${age} years old.`)

// const { city, temp: temprature } = person.location

// if(temprature && city) {
//     console.log(`It's ${temprature} in ${city}!`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',

//     }
// }
// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

    // ARRAY DESTRUCTURING

    // const address = ['123 Jupiter Street', 'Frankfurt', 'Hessen', '65451']

    // const [ , city, state ] = address

    // console.log(`You are in ${city} ${state}.`)

    const item = ['coffee (ice)', '$2.00', '$3.50', '$3.75']

    const [coffeeHot, , price ] = item
    
    console.log(`A medium ${coffeeHot} costs ${price}`)