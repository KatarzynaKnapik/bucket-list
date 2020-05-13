import firebase from 'firebase';
import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsVMc-3YrpUGgjlVDSA2pyFqE01hNfn4Q",
    authDomain: "bucket-list-8e1cf.firebaseapp.com",
    databaseURL: "https://bucket-list-8e1cf.firebaseio.com",
    projectId: "bucket-list-8e1cf",
    storageBucket: "bucket-list-8e1cf.appspot.com",
    messagingSenderId: "759972134833",
    appId: "1:759972134833:web:1eaf60b2aca00d53834790"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase