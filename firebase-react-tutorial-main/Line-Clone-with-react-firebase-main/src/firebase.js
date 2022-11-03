import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyB-yab1Q953jQI5lPs52u5eN5eV3diKrJE',
	authDomain: 'ninja-firegram-d7fa4.firebaseapp.com',
	databaseURL:
		'https://ninja-firegram-d7fa4-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'ninja-firegram-d7fa4',
	storageBucket: 'ninja-firegram-d7fa4.appspot.com',
	messagingSenderId: '735203588786',
	// appId: '1:735203588786:web:aef2012e6bd4353cf667ab',
	// apiKey: 'AIzaSyDT_QRdtH4ay3wuaVaboiIlsNtQLZffueA',
	// authDomain: 'line-clone-72793.firebaseapp.com',
	// projectId: 'line-clone-72793',
	// storageBucket: 'line-clone-72793.appspot.com',
	// messagingSenderId: '344650339675',
	// appId: '1:344650339675:web:443e33d6b9b70af692367e',
	// measurementId: 'G-79V849YC9B',
})

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
