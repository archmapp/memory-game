import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyBOe2Qv3CxsNCIyc0WbOMX-ah7KSyL5MAM',
	authDomain: 'fb-v9-da689.firebaseapp.com',
	projectId: 'fb-v9-da689',
	storageBucket: 'fb-v9-da689.appspot.com',
	messagingSenderId: '959728735173',
	appId: '1:959728735173:web:9475e27d14049d8aebb1ac',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore()
export const storage = getStorage()

export default app
