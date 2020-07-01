import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyABbOOIjZ04KTkPPA62IN1LAKNdoiCuiVQ",
  authDomain: "book-santa-bd86f.firebaseapp.com",
  databaseURL: "https://book-santa-bd86f.firebaseio.com",
  projectId: "book-santa-bd86f",
  storageBucket: "book-santa-bd86f.appspot.com",
  messagingSenderId: "327037062923",
  appId: "1:327037062923:web:496d2f0a86754515759c0e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
