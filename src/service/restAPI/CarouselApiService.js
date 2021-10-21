import axios from "./RestApi"
import authHeader from "../auth/authHeader"

export class CarouselApiService {
  getCarouselImages() {
    return axios.get("/carousel", {
      headers: authHeader(),
    })
  }
  saveCarouselImages(formData) {
    return axios.post("/carousel/save", formData, {
      headers: authHeader(),
    })
  }

  getImages(fileName) {
    return axios.get("/carousel/getImages/bytesArrays/" + fileName, {
      headers: authHeader(),
    })
  }
}
export default new CarouselApiService()
