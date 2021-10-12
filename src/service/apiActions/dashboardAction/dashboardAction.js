import { SET_MESSAGE } from "src/constants/userConstants"
import {
  GET_PRODUCTS_COUNT_TOTAL_SOLD,
  GET_TOTALS,
} from "src/service/redux/constants"
import DashboardApiService from "src/service/restAPI/DashboardApiService"

export const getTotals = () => async (dispatch) => {
  return DashboardApiService.getTotals().then(
    (response) => {
      dispatch({
        type: GET_TOTALS,
        payload: {
          status: 200,
          action: GET_TOTALS,
          data: {
            summaries: response.data,
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

export const getProductsAndCountTatolSold =
  (query, page, limit) => async (dispatch) => {
    return DashboardApiService.getProductsAndCountTatolSold(
      query,
      page,
      limit,
    ).then(
      (response) => {
        dispatch({
          type: GET_PRODUCTS_COUNT_TOTAL_SOLD,
          payload: {
            status: 200,
            action: GET_PRODUCTS_COUNT_TOTAL_SOLD,
            data: {
              products: response.data,
            },
          },
        })
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
