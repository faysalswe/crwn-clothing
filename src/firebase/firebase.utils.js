
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDi4OwjQgPPz9qhdyd6Bgodz8fymsM5X8A",
    authDomain: "crwn-db-4ab38.firebaseapp.com",
    databaseURL: "https://crwn-db-4ab38.firebaseio.com",
    projectId: "crwn-db-4ab38",
    storageBucket: "crwn-db-4ab38.appspot.com",
    messagingSenderId: "19399792471",
    appId: "1:19399792471:web:88cba00b6616ac24755012",
    measurementId: "G-PSSS5QCC1F"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;