// import axios from "axios";
// import { API_BASE_URL } from "../redux/constants";
// import RestApi from "../restAPI/RestApi";
import UserService from "../restAPI/UserService";
class AuthService {
    login(username, password) {
        return UserService.login(username, password)
            .then((response) => {
                if (response.data) {
                    localStorage.setItem("credentials", JSON.stringify(response.data))
                }
                return response.data;
            })
    }
    logout() {
        localStorage.removeItem("credentials");
    }
    register(username, password, email) {
        return UserService.register(username, password, email);
    }
}

export default new AuthService();