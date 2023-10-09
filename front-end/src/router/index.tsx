import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from '../pages/login'
import PageNotFound from '../pages/404'
import PageWrapper from './components/PageWrapper'
import Signup from '../pages/signup'
import userMobx from '../Users/UsersMobx'

const Router = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route
          path="/dashboard/*"
          element={
            <>
              <AdminRoute routes={() => <RightPanel />} />
              <AdminRoute routes={(client) => <PageAuth client={client} />} />
            </>
          }
        /> */}
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