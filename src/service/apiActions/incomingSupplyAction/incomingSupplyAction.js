import { SET_MESSAGE } from "src/constants/userConstants"
import {
  GET_INCOMING_SUPPLIES,
  GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS,
  GET_INCOMING_SUPPLIES_BY_PENDING_STATUS,
  GET_INCOMING_SUPPLY,
  MARK_INCOMING_SUPPLY_AS_DELIVERED,
  SAVE_INCOMING_SUPPLY,
} from "src/service/redux/constants"
import IncomingSupplyApiService from "src/service/restAPI/IncomingSupplyApiService"

export const getIncomingSupplies =
  (query, status, page, limit) => async (dispatch) => {
    return IncomingSupplyApiService.getIncomingSupplies(
      query,
      status,
      page,
      limit,
    ).then(
      (response) => {
        dispatch({
          type: GET_INCOMING_SUPPLIES,
          payload: {
            action: GET_INCOMING_SUPPLIES,
            status: 200,
            data: {
              incomingSupplies: response.data,
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
export const getIncomingSupply = (id) => async (dispatch) => {
  return IncomingSupplyApiService.getIncomingSupply(id).then(
    (response) => {
      dispatch({
        type: GET_INCOMING_SUPPLY,
        payload: {
          action: GET_INCOMING_SUPPLY,
          status: 200,
          data: {
            incomingSupply: response.data,
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

export const saveIncomingSupply =
  (incomingSupplies, supplier) => async (dispatch) => {
    return IncomingSupplyApiService.saveIncomingSupply(
      incomingSupplies,
      supplier,
    ).then(
      (response) => {
        dispatch({
          type: SAVE_INCOMING_SUPPLY,
          payload: {
            status: 200,
            action: SAVE_INCOMING_SUPPLY,
            data: {},
          },
        })
        dispatch({
          type: SET_MESSAGE,
          payload: {
            status: 200,
            data: {
              message: "Successfully Saved",
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
export const markIncomingSuppliesAsDelivered = (id) => async (dispatch) => {
  return IncomingSupplyApiService.markIncomingSuppliesAsDelivered(id).then(
    (response) => {
      dispatch({
        type: MARK_INCOMING_SUPPLY_AS_DELIVERED,
        payload: {
          status: 200,
          action: MARK_INCOMING_SUPPLY_AS_DELIVERED,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Incoming Supplies has been Delivered.",
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
