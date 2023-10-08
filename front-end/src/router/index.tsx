import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react'
import Login from '../pages/login'
import PageNotFound from '../pages/404'

const Router = () => {
  const location = useLocation()

  useEffect(() => {
    // TODO: check if user is logged in and redirect to login if not
  }, [location.pathname])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<Register />} /> */}
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
    </div>
  )
}

export default Router