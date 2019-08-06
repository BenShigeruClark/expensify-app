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

database.ref().set({
  name: 'Benjamin Clark',
  age: 46,
  stressLevel: 6,
  job: {
    title: 'Software Engineer',
    company:'Google'
  },
  location: {
    city: 'Huntington Beach',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref()
//   .remove()
//   then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   });


