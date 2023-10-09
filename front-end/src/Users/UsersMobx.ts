import { makeAutoObservable, observable } from "mobx"
import { publicRoutes } from "../router"

let instance: User
export class User {
  private _user: UserType | null = null

  constructor() {
    if (instance) {
      makeAutoObservable(this)
      return instance
    }
    instance = this
    makeAutoObservable(this)
  }

  get user(): UserType | null {
    return this._user
  }

  set user(user: UserType | null) {
    this._user = user
    if (!this._user && !publicRoutes.includes(window.location.pathname)) {
      window.location.href = "/"
    }
  }

}

const userMobx = new User()
export default userMobx