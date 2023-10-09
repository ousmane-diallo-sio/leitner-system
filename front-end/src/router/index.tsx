import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from '../pages/login'
import PageNotFound from '../pages/404'
import PageWrapper from './components/PageWrapper'
import Signup from '../pages/signup'
import userMobx from '../Users/UsersMobx'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from '../pages/dashboard'
import usersService from '../Users/UsersService'

const Router = () => {
  const location = useLocation()

  useEffect(() => {
    if (userMobx.user && publicRoutes.includes(location.pathname)) {
      usersService.logout()
    }
  }, [location.pathname])

  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard/"
          element={
            <PrivateRoute 
              element={<Dashboard />} 
              isAllowed={!!userMobx.user} />
          } />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </PageWrapper>
  )
}

export const publicRoutes = [
  '/',
  '/login',
  '/signup'
]

export default Router