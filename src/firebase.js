import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD88Qa0n4r1uUsAJkuNXbSr3OkBmQB5qF8",
    authDomain: "clone-8281e.firebaseapp.com",
    projectId: "clone-8281e",
    storageBucket: "clone-8281e.appspot.com",
    messagingSenderId: "112096799021",
    appId: "1:112096799021:web:fa5f420cd722e197a5cba4",
    measurementId: "G-YF6Q373C9H"
  };
// Connect Front-End to Back-End
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//Access to the database
const db = firebaseApp.firestore();
//Enable google authentification
//Got authentification
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//Get access
export { db, auth, provider};
