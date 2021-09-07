import authHeader from '../auth/authHeader';
import axios from './RestApi'

export class PaymentMethodApiService {
    getPaymentMethods() {
        return axios.get("/payment/methods", {
            headers: authHeader()
        })
    }
}
export default new PaymentMethodApiService();