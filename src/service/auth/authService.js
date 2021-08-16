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
        // return RestApi.post("/account/login", { username, password })
        //     .then((response) => {
        //         if (response.data) {
        //             localStorage.setItem("credentials", JSON.stringify(response.data));
        //         }
        //         return response.data;
        //     })
    }
    logout() {
        localStorage.removeItem("credentials");
    }

}

export default new AuthService();