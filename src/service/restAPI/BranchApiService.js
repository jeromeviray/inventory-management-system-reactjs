import axios from './RestApi'

export class BranchApiService {
    getBranches(token) {
        return axios.get("/branches/options", {
            headers: { Authorization: token }
        })
    }
    getBranchesWithTotaProduct(token) {
        return axios.get("/branches", {
            headers: { Authorization: token }
        })
    }
}
export default new BranchApiService();