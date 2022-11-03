import { auth } from '../firebase'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { useAuthContext } from '../context/AuthContext'

const SignUp = () => {
	const { user } = useAuthContext()

	const handleSubmit = (event) => {
		event.preventDefault()
		const { email, password } = event.target.elements
		console.log(email.value, password.value)
		createUserWithEmailAndPassword(auth, email.value, password.value)
		// With new firebase functional approach, you need to include auth parameter like this.
	}

	// ページをリロードしてもログインしているユーザのメールアドレスが表示されるはずです。一体どこに認証情報は保存されているのでしょう？

	// デベロッパーツールの Applicationタブから
	// StorageのIndexedDBのfirebaseLocalStorageを確認してください。
	return (
		<div>
			<h1>ユーザ登録 {user.email}</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>メールアドレス</label>
					<input name="email" type="email" placeholder="email" />
				</div>
				<div>
					<label>パスワード</label>
					<input name="password" type="password" />
				</div>
				<div>
					<button>登録</button>
				</div>
			</form>
		</div>
	)
}

export default SignUp
