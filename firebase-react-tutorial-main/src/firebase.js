import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: 'AIzaSyB-yab1Q953jQI5lPs52u5eN5eV3diKrJE',
	authDomain: 'ninja-firegram-d7fa4.firebaseapp.com',
	databaseURL:
		'https://ninja-firegram-d7fa4-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'ninja-firegram-d7fa4',
	storageBucket: 'ninja-firegram-d7fa4.appspot.com',
	messagingSenderId: '735203588786',
	appId: '1:735203588786:web:aef2012e6bd4353cf667ab',
  
	// apiKey: 'AIzaSyBPN1ilfrzqhfQtb8Z5qxvb74lioCxWJ-M',
	// authDomain: 'fir-react-tutorial-38f07.firebaseapp.com',
	// projectId: 'fir-react-tutorial-38f07',
	// storageBucket: 'fir-react-tutorial-38f07.appspot.com',
	// messagingSenderId: '549189214477',
	// appId: '1:549189214477:web:caef4d6ebbec2d68c71044',
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
