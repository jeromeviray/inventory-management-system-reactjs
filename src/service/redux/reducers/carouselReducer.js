import { GET_CAROUSEL_IMAGES } from "../constants"

const carouselReducer = (state = {}, action) => {
  let status = 200
  let statusType = "info"
  let carouselData = {}

  if (action.payload !== undefined && action.payload.status !== undefined) {
    status = action.payload.status
    statusType = "success"
    if (status >= 400) {
      statusType = "error"
    }
    carouselData = action.payload.data
  }
  let carouselResponse = {
    statusType: statusType,
    type: action.type,
    status: status,
    action: "RETRIEVE",
  }

  switch (action.type) {
    case GET_CAROUSEL_IMAGES:
      carouselResponse["carouselData"] = carouselData.carouselImages
      break
    default:
      return state
  }
  return carouselResponse
}

export default carouselReducer
