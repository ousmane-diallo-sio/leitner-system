import React, { useState } from "react";
import usersService from "../../Users/UsersService";
import userMobx from "../../Users/UsersMobx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PageWrapper from "../../router/components/PageWrapper";

const Signup = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    await usersService.signup(username, password)
    if (userMobx.user) {
      toast.success(`Bienvenue ${username}`)
      navigate('/dashboard')
    }
  }

  return (
    <PageWrapper key="Signup">
      <main>
        <section className="flex flex-col items-center">
          <h1 className="my-20">Créer un compte</h1>

          <div>
            <div className="flex flex-col w-72 mb-2">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                placeholder="John"
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
            <br />
            <button
              className="w-full bg-blue-500 text-white"
              onClick={signup}
            >
              Je m'inscris
            </button>
          </div>
          <br />
          <a onClick={() => navigate('/login')}>
            J'ai déjà un compte
          </a>
        </section>
      </main>
    </PageWrapper>
  )
}

export default Signup