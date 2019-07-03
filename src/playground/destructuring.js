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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName); // Penguin, Self-Published