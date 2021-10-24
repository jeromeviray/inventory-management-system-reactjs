import { SET_MESSAGE } from "src/constants/userConstants"
import {
  DELETE_CUSTOMER_ADDRESS,
  GET_ADDRESSES,
  SAVE_ADDRESS,
  UPDATE_ADDRESS,
} from "src/service/redux/constants"
import AddressApiService from "src/service/restAPI/AddressApiService"

export const getAdress = () => async (dispatch) => {
  return AddressApiService.getAddresses().then(
    (response) => {
      dispatch({
        type: GET_ADDRESSES,
        payload: {
          status: 200,
          action: "GET_ADDRESSES",
          data: {
            addresses: response.data,
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

export const saveAddress = (address) => async (dispatch) => {
  console.log(address)
  return AddressApiService.saveAddress(address).then(
    (response) => {
      dispatch({
        type: SAVE_ADDRESS,
        payload: {
          status: 200,
          action: "SAVE_ADDRESS",
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Address Successfully Saved",
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
export const updateAddress = (id, address) => async (dispatch) => {
  return AddressApiService.updateAddress(id, address).then(
    (response) => {
      dispatch({
        type: UPDATE_ADDRESS,
        payload: {
          status: 200,
          action: UPDATE_ADDRESS,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Updated.",
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
export const deleteAddress = (id) => async (dispatch) => {
  return AddressApiService.deleteAddress(id).then(
    (response) => {
      dispatch({
        type: DELETE_CUSTOMER_ADDRESS,
        payload: {
          status: 200,
          action: DELETE_CUSTOMER_ADDRESS,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Deleted.",
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