import usersService from "./UsersService"

describe("Test UsersService", () => {
  test.each([
    {
      username: "",
      password: "",
      expected: null,
    },
    {
      username: "user",
      password: "azerty",
      expected: Object({ username: "user", password: "azerty" }),
    },
  ])(
      `Should return '$expected' when username is '$username' and password is '$password'`,
      ({ expected, username, password }) => {
          expect(usersService.login(username, password)).toStrictEqual(expected)
      }
  )
})