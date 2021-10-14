import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class AccountApiService {
  getAccountEmployees(query, page, limit) {
    return axios.get("/users/account", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getUsersAccount(query, role, page, limit) {
    return axios.get("/users/account", {
      headers: authHeader(),
      params: {
        query: query,
        role: role,
        page: page,
        limit: limit,
      },
    })
  }

  saveEmployeeAccount(
    firstName,
    lastName,
    email,
    phoneNumber,
    username,
    password,
    birthday,
    role,
  ) {
    console.log(birthday)
    return axios.post(
      "/users/account/create",
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        username,
        password,
        birthday,
        role,
      },
      {
        headers: authHeader(),
      },
    )
  }
  deleteAccount(id) {
    return axios.delete("/users/account/delete/" + id, {
      headers: authHeader(),
    })
  }
  updateUser(id, firstName, lastName, phoneNumber, birthday) {
    return axios.put(
      "/users/account/update/" + id,
      {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        birthday: birthday,
      },
      {
        headers: authHeader(),
      },
    )
  }
  banAccount(id) {
    return axios.delete("/users/account/ban/" + id, {
      headers: authHeader(),
    })
  }
  changePassword(id, currentPassword, newPassword, confirmPassword) {
    let password = newPassword
    return axios.post(
      "/users/account/change/password",
      {
        id,
        currentPassword,
        password,
        confirmPassword,
      },
      {
        headers: authHeader(),
      },
    )
  }
  forgotPassword(email) {
    console.log(email)
    return axios.get("/account/password/forgot", {
      params: {
        email: email,
      },
    })
  }
  verifyAccount(code) {
    return axios.get("/account/verification/" + code)
  }
  validateToken(token) {
    return axios.get("/account/password/forgot/token", {
      params: {
        token: token,
      },
    })
  }
  resetPassword(accountId, token, password, confirmPassword) {
    return axios.post("/users/account/reset/password", {
      accountId: accountId,
      token: token,
      password: password,
      confirmPassword: confirmPassword,
    })
  }
  getMe() {
    return axios.get("/users/account/me", {
      headers: authHeader(),
    })
  }
}
export default new AccountApiService()
