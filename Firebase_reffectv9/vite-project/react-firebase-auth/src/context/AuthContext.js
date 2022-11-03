// https://reffect.co.jp/react/react-firebase-auth

import { createContext, useState, useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext({user: null})

export function useAuthContext() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState('')
	const [loading, setLoading] = useState(true)

	const value = {
		user,
		loading,
	}

	useEffect(() => {
		const unsubscribed = auth.onAuthStateChanged((user) => {
			setUser(user)
			setLoading(false)
		})

		return () => {
			unsubscribed()
		}
	}, [])

	if (loading) {
		return <p>loading...</p>
	} else {
		return (
			<AuthContext.Provider value={value}>
				{!loading && children}
			</AuthContext.Provider>
		)
	}
}
