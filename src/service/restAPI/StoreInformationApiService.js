import authHeader from "../auth/authHeader"
import axios from "./RestApi"
export class StoreInformationApiService {
  getStoreInformation() {
    return axios.get("/store")
  }
  updateStoreInformation(
    id,
    storeName,
    acronym,
    location,
    description,
    contactNumber,
    email,
  ) {
    return axios.put(
      "/store/update/" + id,
      {
        storeName,
        acronym,
        location,
        description,
        contactNumber,
        email,
      },
      {
        headers: authHeader(),
      },
    )
  }
}
export default new StoreInformationApiService()
