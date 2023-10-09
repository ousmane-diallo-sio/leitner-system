/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./components/styles.module.scss"
import usersService from "../../Users/UsersService";
import userMobx from "../../Users/UsersMobx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PageWrapper from "../../router/components/PageWrapper";

const Login = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    await usersService.login(username, password)
    if (userMobx.user) {
      toast.success(`Bienvenue ${username}`)
      navigate('/dashboard')
    }
  }

  return (
    <PageWrapper key="Login">
      <main className={styles['login']}>
        <section className="flex flex-col items-center">
          <h1 className="my-20">Connexion</h1>

          <div className={styles['form']}>
            <div className="flex flex-col w-72 mb-2">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col w-72">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button
              className={styles['login-btn']}
              onClick={login}
            >
              Me connecter
            </button>
            <a onClick={() => navigate('/signup')}>
              Je n'ai pas encore de compte
            </a>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}

export default Login