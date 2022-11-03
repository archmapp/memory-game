// https://reffect.co.jp/react/react-crud-firebase-9

import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, addDoc, doc, setDoc, onSnapshot } from 'firebase/firestore'

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const usersCollectionRef = collection(db, 'users')

		const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
			setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		})
		return unsub
	}, [])

	// setDocでも自動で設定されたIDを利用することができます。その場合は事前に参照を取得してその後にsetDocでドキュメントを登録することで実現できます。
	// この場合はdoc関数を実行した時点でuserDocumentRefにIDが作成されることになります。追加されたドキュメントのIDを取得したい場合はuserDocumentRef.idから取得することができます。
	const handleSubmit = async (event) => {
		event.preventDefault()
		const { name, email } = event.target.elements

		const userDocumentRef = doc(collection(db, 'users'))
		await setDoc(userDocumentRef, {
			name: name.value,
			email: email.value,
		})
	}

	// const handleSubmit = async (event) => {
	// 	event.preventDefault()
	// 	const { name, email } = event.target.elements
	// 	console.log(name.value, email.value)

	//   // setDoc関数によるドキュメント追加
	//   // ドキュメントする方法にはaddDoc関数の他にsetDoc関数を使った方法があります。違いはドキュメントのIDを自動で設定するか指定しないかです。Firebaseの管理画面上でドキュメントを登録する際にIDを手動で設定できたようにsetDocを利用することで任意の名前のIDを設定することができます。

	//   // setDocを利用する場合はdoc関数を利用して第3引数にIDを指定します。
	// 	const userDocumentRef = doc(db, 'users', 'ABCDEF')
	// 	const documentRef = await setDoc(userDocumentRef, {
	// 		name: name.value,
	// 		email: email.value,
	// 	})
	// 	console.log(documentRef)
	// }

	return (
		<div style={{ margin: '50px' }}>
			<form onSubmit={handleSubmit}>
				<div>
					<label>名前</label>
					<input name="name" type="text" placeholder="名前" />
				</div>
				<div>
					<label>メールアドレス</label>
					<input name="email" type="email" placeholder="メールアドレス" />
				</div>
				<div>
					<button>登録</button>
				</div>
			</form>
			<h1>ユーザ一覧</h1>
			<div>
				{users.map((user) => (
					<div key={user.id}>{user.name}</div>
				))}
			</div>
		</div>
	)
}

export default App
