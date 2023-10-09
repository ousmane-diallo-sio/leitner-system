import { randomUUID } from "crypto"
import envUtils from "../utils/EnvUtils"
import sheetsService from "./SheetsService"

beforeAll(() => {
  envUtils.API_BASE_URL = "http://localhost:3005"
})

test("SheetsService::getSheets", async () => {
  const sheets = await sheetsService.getSheets()
  expect(sheets).toBeInstanceOf(Array)
})