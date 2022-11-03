// https://reffect.co.jp/react/react-crud-firebase-9

import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

function App() {
	const [user, setUser] = useState()

	useEffect(() => {
		const userDocumentRef = doc(db, 'users', 'E6JDzd6bWVrdN4P2MxdB')

		getDoc(userDocumentRef).then((documentSnapshot) => {
			if (documentSnapshot.exists()) {
				console.log('Document data:', documentSnapshot.data())
				setUser(documentSnapshot.data())
			} else {
				console.log('No such document!')
			}
		})
	}, [])

	return (
		<div>
			<pre>{JSON.stringify(user, null, '\t')}</pre>
		</div>

		// <div>
		// 	<pre>{JSON.stringify(users, null, "\t")}</pre>
		// </div>
	)

	// useEffect(() => {
	// 	const usersCollectionRef = collection(db, 'users')
	// 	getDocs(usersCollectionRef).then((querySnapshot) => {
	//     setUsers(querySnapshot.docs.map((doc) => doc.data()))
	// 		// querySnapshot.forEach((doc) => console.log(doc.data()))
	// 		// querySnapshot.docs.forEach((doc) => console.log(doc.data()))
	//     // .docsは省略可
	// 	})
	// }, [])

	// return <div>{JSON.stringify(users)}</div>
}

export default App
