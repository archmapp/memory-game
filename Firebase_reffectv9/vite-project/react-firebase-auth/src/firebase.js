// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	// apiKey: 'AIzaSyC993YQYhoJvs07rGu-iolWkPSMJNkHMVs',
	// authDomain: 'shinkeisuijakuninja.firebaseapp.com',
	// projectId: 'shinkeisuijakuninja',
	// storageBucket: 'shinkeisuijakuninja.appspot.com',
	// messagingSenderId: '1039297207749',
	// appId: '1:1039297207749:web:cb3c187705a3e756023fac',
	// measurementId: 'G-TLKRLN4WWR',
  
	apiKey: 'AIzaSyB-yab1Q953jQI5lPs52u5eN5eV3diKrJE',
	authDomain: 'ninja-firegram-d7fa4.firebaseapp.com',
	databaseURL:
		'https://ninja-firegram-d7fa4-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'ninja-firegram-d7fa4',
	storageBucket: 'ninja-firegram-d7fa4.appspot.com',
	messagingSenderId: '735203588786',
	appId: '1:735203588786:web:aef2012e6bd4353cf667ab',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
export const storage = getStorage()
export const auth = getAuth()

export default app
