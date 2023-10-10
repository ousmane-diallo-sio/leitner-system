/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import userMobx from '../../../Users/UsersMobx'

const NavBar = () => {

  const navigate = useNavigate()

  const navItems = [
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
      path: '/login',
      className: 'bg-red-500 text-white rounded',
    } 
  ]

  return (
    <section className='w-full flex py-6 justify-evenly items-center bg-slate-100 mb-3 sticky top-0'>
      <h2>Bonjour {userMobx.user?.username}</h2>
      {navItems.map((item, index) => (
        <a
          key={index}
          className={`text-slate-700 px-4 py-2 ${item.className ?? ''}`}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </a>
      ))}
    </section>
  )
}

export default NavBar
