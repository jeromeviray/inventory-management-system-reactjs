// import { GET_CAROUSEL_IMAGES, CAROUSEL_FOLDER_DIRECTORY } from "../../../redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants"
import {
  GET_CAROUSEL_IMAGES,
  CAROUSEL_FOLDER_DIRECTORY,
  SAVE_CAROUSEL_IMAGES,
  UPDATE_CAROUSEL_IMAGES,
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

export const saveCarouselImages = (formData) => async (dispatch) => {
  return CarouselApiService.saveCarouselImages(formData).then(
    (response) => {
      dispatch({
        type: SAVE_CAROUSEL_IMAGES,
        payload: {
          status: 200,
          action: SAVE_CAROUSEL_IMAGES,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully saved.",
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
export const updateCarouselImages = (formData) => async (dispatch) => {
  return CarouselApiService.updateCarouselImages(formData).then(
    (response) => {
      dispatch({
        type: UPDATE_CAROUSEL_IMAGES,
        payload: {
          status: 200,
          action: UPDATE_CAROUSEL_IMAGES,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully updated.",
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
