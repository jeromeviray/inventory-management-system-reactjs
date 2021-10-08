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
  getAccountCustomers(query, page, limit) {
    return axios.get("/users/account/customers", {
      headers: authHeader(),
      params: {
        query: query,
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
    token,
    role,
  ) {
    return axios.post(
      "/users/account/create",
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        username,
        password,
        role,
      },
      {
        headers: { Authorization: token },
      },
    )
  }
  deleteAccount(id) {
    return axios.delete("/users/account/delete/" + id, {
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
}
export default new AccountApiService()
