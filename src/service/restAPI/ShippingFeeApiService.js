import authHeader from "../auth/authHeader"
import axios from "./RestApi"
export class ShippingFeeApiService {
    getShippingFees() {
        return axios.get("/shipping/fees",
            { headers: authHeader() })
    }

}
export default new ShippingFeeApiService()
