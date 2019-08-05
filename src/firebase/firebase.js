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

firebase.database().ref().set({
  name: 'Benjamin Clark'
});