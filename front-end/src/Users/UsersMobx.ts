import { action, makeAutoObservable, observable } from "mobx"
import { publicRoutes } from "../router"
import { create, persist } from "mobx-persist"

let instance: User
export class User {

  constructor() {
    if (instance) {
      makeAutoObservable(this)
      return instance
    }
    instance = this
    makeAutoObservable(this)
  }

  @persist("object")
  @observable user: UserType | null = null

  @action.bound
  setUser(user: UserType | null) {
    this.user = user
  }

}

const hydrate = create({ storage: localStorage })
const userMobx = new User()
hydrate("user", userMobx)

export default userMobx