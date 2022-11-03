// import firebase from 'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB-yab1Q953jQI5lPs52u5eN5eV3diKrJE",
  authDomain: "ninja-firegram-d7fa4.firebaseapp.com",
  projectId: "ninja-firegram-d7fa4",
	databaseURL: 'https://ninja-firegram-d7fa4.firebaseio.com', // none in v9
  storageBucket: "ninja-firegram-d7fa4.appspot.com",
  messagingSenderId: "735203588786",
  appId: "1:735203588786:web:aef2012e6bd4353cf667ab"
}

// Initialize Firebase "firebase": "^7.16.1",
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };