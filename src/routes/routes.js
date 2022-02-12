//first difference using element instead of component which allows for passing props directly

import Home from '../Home'
import Protected from '../Protected'

export const protectedRoutes = [{ path: '/auth/protected', element: <Protected /> }]

export const publicRoutes = [{ path: '/', element: <Home /> }]
