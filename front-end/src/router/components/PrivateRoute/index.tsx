import React, { FC, ReactNode, useEffect } from 'react'
import { publicRoutes } from '../..'
import userMobx from '../../../Users/UsersMobx'
import { observer } from 'mobx-react'
import { Navigate, useLocation } from 'react-router-dom'

type PrivateRouteProps = {
  element: ReactNode
  isAllowed: boolean
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element, isAllowed }) => {

  const isAllowedInPage = isAllowed

  return (
    <>
      {!isAllowedInPage ? <Navigate to="/404" /> : element}
    </>
  )
}

export default observer(PrivateRoute)
