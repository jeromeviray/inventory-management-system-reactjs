// import { GET_CAROUSEL_IMAGES, CAROUSEL_FOLDER_DIRECTORY } from "../../../redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants"
import {
  GET_CAROUSEL_IMAGES,
  CAROUSEL_FOLDER_DIRECTORY,
} from "src/service/redux/constants"
import CarouselApiService from "src/service/restAPI/CarouselApiService"

export const getCarouselImages = () => async (dispatch) => {
  return CarouselApiService.getCarouselImages().then(
    (response) => {
      dispatch({
        type: GET_CAROUSEL_IMAGES,
        payload: {
          status: 200,
          data: {
            carouselImages: response.data,
          },
        },
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.error_message ||
        error.toString()

      const status =
        (error.response && error.response.data && error.response.data.code) ||
        error.toString()

      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: status,
          data: {
            message: message,
          },
        },
      })
      return Promise.reject()
    },
  )
}
