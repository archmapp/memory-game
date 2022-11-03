import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: 'AIzaSyB-yab1Q953jQI5lPs52u5eN5eV3diKrJE',
	authDomain: 'ninja-firegram-d7fa4.firebaseapp.com',
	databaseURL:
		'https://ninja-firegram-d7fa4-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'ninja-firegram-d7fa4',
	storageBucket: 'ninja-firegram-d7fa4.appspot.com',
	messagingSenderId: '735203588786',
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//firestore初期化
const db = getFirestore();

export { auth, provider, db };
