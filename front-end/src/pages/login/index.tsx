import React, { useState } from "react";
import styles from "./components/styles.module.scss"

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const signup = () => {
    console.log('Create Account button clicked');
  };

  return (
    <main className={styles['login']}>
      <section className="flex flex-col items-center">
        <h1 className="my-20">Login</h1>

        <div className={styles['form']}>
          <div className="flex flex-col w-72 mb-2">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="flex flex-col w-72">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button 
            className={styles['login-btn']}
            onClick={login}
          >
            Login
          </button>
          <a href="/signup">Je n'ai pas encore de compte</a>
        </div>
      </section>
    </main>
  )
}

export default Login