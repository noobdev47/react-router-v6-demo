import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'

//Navigate Replaces Redirect but has core changes

const TokenBasedMiddleware = ({ isProtected }) => {
	return isProtected && localStorage.getItem('token') ? (
		<Outlet />
	) : (
		<Navigate to={{ pathname: '/' }} />
	)
}

export default TokenBasedMiddleware
