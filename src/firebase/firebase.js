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
  isSingle: true,
  location: {
    city: 'Huntington Beach',
    country: 'United States'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set('Long Beach');

database.ref('attributes').set({
  height: 74,
  weight: 120
});
