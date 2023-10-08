import usersService from "./UsersService"

describe("Test UsersService", () => {
  test.each([
    {
      username: "",
      password: "",
      expected: null,
    },
    {
      username: "John",
      password: "azerty",
      expected: Object({ username: "John", password: "azerty" }),
    },
  ])(
      `Should return '$expected' when username is '$username' and password is '$password'`,
      async ({ expected, username, password }) => {
          expect( await usersService.login(username, password)).toStrictEqual(expected)
      }
  )
})