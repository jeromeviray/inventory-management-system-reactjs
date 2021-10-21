import { GET_CAROUSEL_IMAGES, SAVE_CAROUSEL_IMAGES, UPDATE_CAROUSEL_IMAGES } from "../constants"

const carouselReducer = (state = {}, action) => {
  const { payload, type } = action
  let status = 200
  let statusType = "info"
  let carouselData = {}

  if (payload !== undefined && payload.status !== undefined) {
    status = payload.status
    statusType = "success"
    if (status >= 400) {
      statusType = "error"
    }
    carouselData = payload.data
  }
  let carouselResponse = {
    statusType: statusType,
    type: action.type,
    status: status,
    action: "RETRIEVE",
  }

  switch (type) {
    case GET_CAROUSEL_IMAGES:
      carouselResponse["carouselData"] = carouselData.carouselImages
      break
    case SAVE_CAROUSEL_IMAGES:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case UPDATE_CAROUSEL_IMAGES:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    default:
      return state
  }
  return carouselResponse
}

export default carouselReducer
