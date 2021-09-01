import axios from './RestApi'

export class EmployeeApiService {
    getAccountEmployees(token) {
        return axios.get("/account/employee", {
            headers: { Authorization: token }
        })
    }
    saveEmployeeAccount(firstName, lastName, email, phoneNumber, username, password, token) {
        return axios.post("/account/employee/save", {
            firstName,
            lastName,
            email,
            phoneNumber,
            username,
            password

        }, {
            headers: { Authorization: token }
        })
    }
    deleteEmployee(id, token) {
        return axios.delete("/account/employee/delete/" + id, {
            headers: { Authorization: token }
        })
    }
}
export default new EmployeeApiService();