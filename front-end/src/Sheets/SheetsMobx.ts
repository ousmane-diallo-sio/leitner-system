import { action, makeAutoObservable, observable } from "mobx"
import { publicRoutes } from "../router"
import { create, persist } from "mobx-persist"

let instance: Sheet
export class Sheet {

  constructor() {
    if (instance) {
      makeAutoObservable(this)
      return instance
    }
    instance = this
    makeAutoObservable(this)
  }

  @persist("object")
  @observable sheets: SheetType[] = []

  @action.bound
  setSheets(sheets: SheetType[]) {
    this.sheets = sheets
  }

}

const hydrate = create({ storage: localStorage })
const sheetMobx = new Sheet()
hydrate("sheet", sheetMobx)

export default sheetMobx