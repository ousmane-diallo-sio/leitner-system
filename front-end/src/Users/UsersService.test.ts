import usersService from "./UsersService"

describe("Test UsersService", () => {
  test.each([
    {
      username: "",
      password: "",
      expected: null,
    },
    {
      username: null,
      password: null,
      expected: null,
    },
    {
      username: "user",
      password: "azerty",
      expected: { username: "user", password: "azerty" },
    },
  ])(
      `Should return '$expected' when username is '$username' and password is '$password'`,
      ({ expected, username, password }) => {
          expect(usersService.login()).toBe(expected)
      }
  )
})