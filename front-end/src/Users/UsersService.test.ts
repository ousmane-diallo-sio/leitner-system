import envUtils from "../utils/EnvUtils"
import usersService from "./UsersService"

describe("Test UsersService", () => {
  
  const validResponse: ServerResponse<User> = {
    data: { username: "John", password: "azerty" } 
  }

  beforeAll(() => {
    envUtils.API_BASE_URL = "http://localhost:3005"
  })

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