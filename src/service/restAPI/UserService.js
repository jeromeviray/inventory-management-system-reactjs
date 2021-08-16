import http from './RestApi'

class UserService {
    login(username, password) {
        return http.post("/account/login", { username, password })
    }
    register(username, password, email) {
        return http.post("account/register", { username, password, email })
    }
}

export default new UserService();