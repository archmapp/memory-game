// https://reffect.co.jp/react/react-crud-firebase-9

import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const usersCollectionRef = collection(db, 'users')
		
		getDocs(usersCollectionRef).then((querySnapshot) => {
			setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		})
	}, [])

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
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
