
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

export const createUserProfileDocument = async (userAuth, otherProperties) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherProperties
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;