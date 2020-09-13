import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDhnFJhlcNEB6plfjOiZ84cQMsKljrwYOs",
  authDomain: "nimes-denim.firebaseapp.com",
  databaseURL: "https://nimes-denim.firebaseio.com",
  projectId: "nimes-denim",
  storageBucket: "nimes-denim.appspot.com",
  messagingSenderId: "577916160517",
  appId: "1:577916160517:web:323d3f6f5f45309561ea6c",
  measurementId: "G-7XGBNNFDQG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
