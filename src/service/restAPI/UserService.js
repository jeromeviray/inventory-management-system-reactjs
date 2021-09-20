import http from './RestApi'

class UserService {
    login(username, password) {
        return http.post("/account/login", { username, password })
    }
    register(username, password, email, firstName, lastName, phoneNumber) {
        return http.post("/users/account/register", { username, password, email, firstName, lastName, phoneNumber })
    }
}

export default new UserService();