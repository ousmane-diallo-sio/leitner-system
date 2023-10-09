import { makeAutoObservable, observable } from "mobx"

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

  @observable user: UserType | null = null

}

const userMobx = new User()
export default userMobx