import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class AccountApiService {
  getAccountEmployees(token) {
    return axios.get("/users/account", {
      headers: { Authorization: token },
    })
  }
  getAccountCustomers(token) {
    return axios.get("/users/account/customers", {
      headers: authHeader(),
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
  deleteAccount(id, token) {
    return axios.delete("/users/account/delete/" + id, {
      headers: { Authorization: token },
    })
  }
  changePassword(id, currentPassword, newPassword, confirmPassword) {
    let password = newPassword;
    return axios.post("/users/account/change/password", {
      id,
      currentPassword,
      password,
      confirmPassword
    }, {
      headers: authHeader()
    })
  }
}
export default new AccountApiService()
