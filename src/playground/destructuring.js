// Object Destructuring

// const person = {
//   name: 'Benjamin',
//   age: 46,
//   location: {
//     city: 'Huntington Beach',
//     temp: 78
//   }
// };

// const {name: firstName ='Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} degrees in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); // Penguin, Self-Published


//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Huntington Beach', 'California', '92648'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);

// const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
// const [itemName, , mediumPrice] = item;

// grab first and third items using array destructuring
// console.log(`A medium ${itemName} costs ${mediumPrice}.`);
