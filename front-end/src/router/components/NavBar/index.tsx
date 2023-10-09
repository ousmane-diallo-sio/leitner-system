/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import userMobx from '../../../Users/UsersMobx'

const NavBar = () => {

  const navigate = useNavigate()

  const items = [
    {
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      label: 'Mes questions',
      path: '/sheets'
    },
    {
      label: 'Déconnexion',
      path: '/login'
    } 
  ]

  return (
    <section className='w-full flex py-6 justify-evenly bg-slate-100 mb-3 sticky top-0'>
      {items.map((item, index) => (
        <a
          key={index}
          className='text-slate-700'
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </a>
      ))}
      <b>{userMobx.user?.username}</b>
    </section>
  )
}

export default NavBar
