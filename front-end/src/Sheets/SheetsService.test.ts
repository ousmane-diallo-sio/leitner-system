import { randomUUID } from "crypto"
import envUtils from "../utils/EnvUtils"
import sheetsService from "./SheetsService"

beforeAll(() => {
  envUtils.API_BASE_URL = "http://localhost:3005"
})

describe("SheetsService::getSheets", () => {

  test.each([
    {
      expected: null,
    },
  ])(
      `Should return '$expected'`,
      async ({ expected }) => {
        const stringifiedExpected = JSON.stringify(expected)
        const stringifiedRes = JSON.stringify(await sheetsService.getSheets())
        expect(stringifiedRes).toStrictEqual(stringifiedExpected)
      }
  )
})