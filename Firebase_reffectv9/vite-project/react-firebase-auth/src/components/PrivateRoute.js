import { Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useAuthContext()

	return (
		<Route
			{...rest}
			render={(routeProps) => {
				return user ? (
					<Route {...routeProps} />
				) : (
					<Navigate to="/login" replace />
				)
				// return user ? <Component {...routeProps} /> : <Navigate to="/login" replace />
			}}
		/>
	)
}

export default PrivateRoute
