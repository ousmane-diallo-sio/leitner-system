import usersService from "./UsersService"

describe("Test UsersService", () => {
  test.each([
    {
      username: "",
      password: "",
      expected: null,
    }
])(
    `Should return '$expected' when username is '$username' and password is '$password'`,
    ({ expected, username, password }) => {
        expect(usersService.login()).toBe(null)
    }
)
})