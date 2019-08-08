import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC79oDDX-9XcN8UBTFYsO8jS9aICQMWyGE",
  authDomain: "expensify-d476a.firebaseapp.com",
  databaseURL: "https://expensify-d476a.firebaseio.com",
  projectId: "expensify-d476a",
  storageBucket: "",
  messagingSenderId: "149557498475",
  appId: "1:149557498475:web:e9f7c7e64d09dc16"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();



// database.ref('expenses').push({
//   description: 'Photography Supplies',
//   note: 'Equipment needed for Nike shoot',
//   amount: 2500000,
//   createdAt: 'August 07, 2019'
// });




// database.ref('notes/-LliP1hXzLuY6xpg1mlG').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// Setup data sub -> Benjamin is a Software Developer at Amazon.

// Change the data and make sure it reprints


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Benjamin Clark',
//   age: 46,
//   stressLevel: 6,
//   job: {
//     title: 'Software Engineer',
//     company:'Google'
//   },
//   location: {
//     city: 'Huntington Beach',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });



// database.ref()
//   .remove()
//   then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   });


