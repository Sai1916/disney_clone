import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMfANNxPd9_ugwP2tsGbgNfXEvEUJdnek",
    authDomain: "disney-clone-76a2f.firebaseapp.com",
    projectId: "disney-clone-76a2f",
    storageBucket: "disney-clone-76a2f.appspot.com",
    messagingSenderId: "128260029669",
    appId: "1:128260029669:web:987eb1a33995a9d5c8a80c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;