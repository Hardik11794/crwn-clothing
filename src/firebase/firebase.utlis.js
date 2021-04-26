import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBsarxTg7I7RaUForunjv9b4H68AoWWS8E",
    authDomain: "crwn-db-45cc5.firebaseapp.com",
    projectId: "crwn-db-45cc5",
    storageBucket: "crwn-db-45cc5.appspot.com",
    messagingSenderId: "414288369593",
    appId: "1:414288369593:web:84a0988e9349b18525c868",
    measurementId: "G-S2W51VJ9KQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;