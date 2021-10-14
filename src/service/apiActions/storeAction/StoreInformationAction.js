import { SET_MESSAGE } from "src/constants/userConstants"
import { GET_STORE_INFORMATION } from "src/service/redux/constants"
import StoreInformationApiService from "src/service/restAPI/StoreInformationApiService"
export const getStoreInformation = () => async (dispatch) => {
  return StoreInformationApiService.getStoreInformation().then(
    (response) => {
      dispatch({
        type: GET_STORE_INFORMATION,
        payload: {
          status: 200,
          action: GET_STORE_INFORMATION,
          data: {
            storeInfo: response.data,
          },
        },
      })
      return Promise.resolve()
    },
    (error) => {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      const status =
        (error.response && error.response.data && error.response.data.code) ||
        error.toString()

      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: status,
          data: {
            message: errorMessage,
          },
        },
      })
      return Promise.reject()
    },
  )
}
