import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from '../pages/login'
import PageNotFound from '../pages/404'
import PageWrapper from './components/PageWrapper'
import Signup from '../pages/signup'

const Router = () => {
  const location = useLocation()

  useEffect(() => {
    // TODO: check if user is logged in and redirect to login if not
  }, [location.pathname])
  
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
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

export default Router