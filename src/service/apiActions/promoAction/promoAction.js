import { SET_MESSAGE } from "src/constants/userConstants"
import { GET_PROMOS } from "src/service/redux/constants"
import PromoApiService from "src/service/restAPI/PromoApiService"

export const getPromos = () => async (dispatch) => {
  return PromoApiService.getPromos().then(
    (response) => {
      dispatch({
        type: GET_PROMOS,
        payload: {
          status: 200,
          action: GET_PROMOS,
          data: {
            productsWithPromo: response.data,
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
        error.status ||
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
