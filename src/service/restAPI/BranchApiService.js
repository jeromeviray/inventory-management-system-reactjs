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
    saveBranch(branch, token) {
        console.log(branch)
        return axios.post("/branches/save", {
            branch
        }, {
            headers: { Authorization: token }
        });
    }
    updateBranch(id, branch, token) {
        console.log(id)
        return axios.post("/branches/update/" + id, {
            branch
        }, {
            headers: { Authorization: token }
        })
    }
    deleteBranch(id, token) {
        return axios.delete("/branches/delete/" + id, {
            headers: { Authorization: token }
        })
    }
}
export default new BranchApiService();