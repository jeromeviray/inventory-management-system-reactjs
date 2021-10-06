import { SET_MESSAGE } from "src/constants/userConstants"
import {
  DELETE_PROMO,
  GET_PROMOS,
  SAVE_PROMO,
  UPDATE_PROMO,
} from "src/service/redux/constants"
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
export const savePromo =
  (quantity, percentage, productId, startDate, endDate) => async (dispatch) => {
    return PromoApiService.savePromo(
      quantity,
      percentage,
      productId,
      startDate,
      endDate,
    ).then(
      (response) => {
        dispatch({
          type: SAVE_PROMO,
          payload: {
            status: 200,
            action: SAVE_PROMO,
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
export const deletePromo = (id) => async (dispatch) => {
  return PromoApiService.deletePromo(id).then(
    (response) => {
      dispatch({
        type: DELETE_PROMO,
        payload: {
          action: DELETE_PROMO,
          status: 200,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully DELETED",
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
export const updatePromo =
  (id, quantity, percentage, productId, startDate, endDate) =>
  async (dispatch) => {
    return PromoApiService.updatePromo(
      id,
      quantity,
      percentage,
      productId,
      startDate,
      endDate,
    ).then(
      (response) => {
          dispatch({
            type: UPDATE_PROMO,
            payload: {
              action: UPDATE_PROMO,
              status: 200,
              data: {
                updatedPromo: response.data
              },
            },
          })
          dispatch({
            type: SET_MESSAGE,
            payload: {
              status: 200,
              data: {
                message: "Successfully Updated",
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
           (error.response &&
             error.response.data &&
             error.response.data.code) ||
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
