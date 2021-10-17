import axios from "./RestApi"
import authHeader from "../auth/authHeader"

export class TermsAndCondionApiService {
  saveTermsAndCondition(content) {
    return axios.post(
      "/terms/save",
      {
        content,
      },
      {
        headers: authHeader(),
      },
    )
  }
  updateTermsAndCondition(id, content) {
    return axios.put(
      "/terms/update/" + id,
      {
        content,
      },
      {
        headers: authHeader(),
      },
    )
  }
  getTermsAndCondition() {
    return axios.get(
      "/terms",
      {
        headers: authHeader(),
      },
    )
  }
}
export default new TermsAndCondionApiService()
