import authHeader from "../auth/authHeader";
import axios from "./RestApi"

export class PromoApiService{
     getPromos() {
          return axios.get("/promos", {
               headers: authHeader()
          })
     }
}
export default new PromoApiService();