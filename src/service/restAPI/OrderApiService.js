import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class OrderApiService {
    getOrders(status, query, page, limit) {
        return axios.get("/orders/status/" + status, {
            headers: authHeader(),
            params: {
                query: query,
                page: page,
                limit: limit
            }
        })
    }

    getPaymentTransactions(query, page, limit) {
        return axios.get("/orders/payments", {
            headers: authHeader(),
            params: {
                query: query,
                page: page,
                limit: limit
            }
        })
    }

    updateOrderPaymentStatus(orderId, paymentStatus) {
        return axios.put("/orders/" + orderId + "/paid/" + paymentStatus, {}, {
            headers: authHeader()
        })
    }


    placeOrderDetails(orderDetails) {
        return axios.post("/orders/checkout", {
            customerAddressId: orderDetails.addressId,
            paymentId: orderDetails.paymentMethodId,
            cartItems: orderDetails.items,
            shippingFeeId: orderDetails.shippingFee
        }, {
            headers: authHeader()
        })
    }

    getOrderByOrderId(orderId) {
        return axios.get("/orders/" + orderId, {
            headers: authHeader()
        })
    }

    updateOrderStatus(orderId, status, trackingNumber, trackingUrl) {
        return axios.put("/orders/" + orderId + "/status/" + status, {}, {
            headers: authHeader(),
            params: {
                trackingNumber: trackingNumber,
                trackingUrl: trackingUrl
            }
        })
    }

    validateCart(data) {
        return axios.post("/orders/validate", data, {
            headers: authHeader()
        })
    }
}
export default new OrderApiService();