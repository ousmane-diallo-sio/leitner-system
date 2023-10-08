import { randomUUID } from "crypto"
import envUtils from "../utils/EnvUtils"
import usersService from "./UsersService"

beforeAll(() => {
  envUtils.API_BASE_URL = "http://localhost:3005"
})

describe("UsersService::login", () => {
  
  const validResponse: ServerResponse<UserType> = {
    data: { username: "John", password: "azerty" } 
  }

  test.each([
    {
      username: "",
      password: "",
      expected: null,
    },
    {
      username: validResponse.data.username,
      password: validResponse.data.password,
      expected: validResponse.data,
    },
  ])(
      `Should return '$expected' when username is '$username' and password is '$password'`,
      async ({ expected, username, password }) => {
        const stringifiedExpected = JSON.stringify(expected)
        const stringifiedRes = JSON.stringify(await usersService.login(username, password))
        expect(stringifiedRes).toStrictEqual(stringifiedExpected)
      }
  )
})

describe("UsersService::signup", () => {
  
  const validResponse: ServerResponse<UserType> = {
    data: { username: `user-${randomUUID()}`, password: "azerty" } 
  }
  
  test.each([
    {
      username: "",
      password: "",
      expected: null,
    },
    {
      username: validResponse.data.username,
      password: validResponse.data.password,
      expected: validResponse.data,
    },
  ])(
      `Should return '$expected' when username is '$username' and password is '$password'`,
      async ({ expected, username, password }) => {
        const stringifiedExpected = JSON.stringify(expected)
        const stringifiedRes = JSON.stringify(await usersService.login(username, password))
        expect(stringifiedRes).toStrictEqual(stringifiedExpected)
      }
  )
})