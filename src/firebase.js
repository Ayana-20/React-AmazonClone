import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAtEe3mklw6Vzk9oWZYNJn0gFuKAz2QWMg",
    authDomain: "clone-14e47.firebaseapp.com",
    projectId: "clone-14e47",
    storageBucket: "clone-14e47.appspot.com",
    messagingSenderId: "997816713386",
    appId: "1:997816713386:web:f64ba4e0a26ada33b490d3",
    measurementId: "G-G03Z6QR57D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
