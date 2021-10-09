import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class CommentApiService {
    getComments(productId, page, limit) {
        return axios.get("/comments", {
            params: {
                productId: productId,
                page: page,
                limit: limit,
            }
        })
    }
    saveComment(commentDetails) {
        return axios.post("/comments", commentDetails, {
            headers: authHeader()
        })
    }
    deleteComment(commentId) {
        return axios.delete("/comments/" + commentId, {
            headers: authHeader()
        })
    }
}
export default new CommentApiService();