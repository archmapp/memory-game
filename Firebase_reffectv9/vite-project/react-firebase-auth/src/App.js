import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter ,Routes, Route, Navigate } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'
import { useAuthContext } from './context/AuthContext'

function App() {
	const { user } = useAuthContext()

	return (
		<AuthProvider>
			<div style={{ margin: '2em' }}>
				<BrowserRouter>
					<Routes>
						{/* <Route path="/" element={<Home />} /> */}
						{/* {user && (
							<Route path="/" element={<Home />} />
						) } */}
						<Route path="/" element={<Home />} />
						{/* {user ? (
							<Route path="/" element={<Home />} />
						) : (
							<Route path="/login" element={<Login />} />
						)} */}
						{/* {user ? (
							<Route path="/" element={<Home />} />
						) : (
							<Navigate to="/login" replace />
						)} */}

						<Route path="/signup" element={<SignUp />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		</AuthProvider>
	)
}

export default App
