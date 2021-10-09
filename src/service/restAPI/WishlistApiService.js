import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class WishlistApiService {
    getWishlist(query, page, limit) {
        return axios.get("/wishlist", {
            headers: authHeader(),
            params: {
                query: query,
                page: page,
                limit: limit,
            }
        })
    }
    saveWishlist(wishlistDetails) {
        return axios.post("/wishlist", {
            customerAddressId: wishlistDetails.addressId,
            paymentId: wishlistDetails.paymentMethodId,
            cartItems: wishlistDetails.items
        }, {
            headers: authHeader()
        })
    }
    deleteWishlist(orderId) {
        return axios.delete("/wishlist/" + orderId, {
            headers: authHeader()
        })
    }
}
export default new WishlistApiService();