import axios from "./RestApi"
export class StoreInformationApiService {
     getStoreInformation() {
          return axios.get("/store")
     }
}
export default new StoreInformationApiService()