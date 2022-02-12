import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TokenBasedMiddleware from './routes/middleware/TokenBasedMiddleware'
import { protectedRoutes, publicRoutes } from './routes/routes'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map((publicRoute, i) => (
					<Route
						key={i}
						exact
						path={publicRoute.path}
						element={publicRoute.element}
					/>
				))}
				<Route
					exact
					path='/auth'
					element={<TokenBasedMiddleware isProtected={true} />}
				>
					{protectedRoutes.map((protectedRoute, i) => (
						<Route
							key={i}
							path={protectedRoute.path}
							element={protectedRoute.element}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
