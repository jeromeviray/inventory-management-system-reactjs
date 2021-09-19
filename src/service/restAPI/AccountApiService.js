import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class EmployeeApiService {
  getAccountEmployees(token) {
    return axios.get("/users/accounts", {
      headers: { Authorization: token },
    })
  }
  getAccountCustomers(token) {
    return axios.get("/users/accounts/customers", {
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
      "/users/accounts/create",
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
  deleteEmployee(id, token) {
    return axios.delete("/account/employee/delete/" + id, {
      headers: { Authorization: token },
    })
  }
}
export default new EmployeeApiService()
