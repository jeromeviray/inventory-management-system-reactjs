import { SET_MESSAGE } from "src/constants/userConstants"
import {
  ADD_TO_CART,
  GET_CART_ITEMS,
  QUANTITY_ACTION,
  REMOVE_ITEM,
} from "src/service/redux/constants"
import CartApiService from "src/service/restAPI/CartApiService"

export const addToCart = (id) => async (dispatch) => {
  return CartApiService.addToCart(id).then(
    (response) => {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          status: 200,
          action: "ADDTOCART",
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Added Successfully",
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
export const getCart = () => async (dispatch) => {
  return CartApiService.getCart().then(
    (response) => {
      dispatch({
        type: GET_CART_ITEMS,
        payload: {
          status: 200,
          action: "CARTITEMS",
          data: {
            cart: response.data,
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

export const removeCartItem = (id) => async (dispatch) => {
  return CartApiService.removeItem(id).then(
    (response) => {
      dispatch({
        type: REMOVE_ITEM,
        payload: {
          status: 200,
          action: "REMOVE",
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Remove Item Successfully",
          },
        },
      })

      return Promise.resolve()
    },
    (error) => {
      console.log(error)
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

export const quantityAction = (action, productId) => async (dispatch) => {
  return CartApiService.quantityAction(action, productId).then(
    (response) => {
      dispatch({
        type: QUANTITY_ACTION,
        payload: {
          status: 200,
          action: QUANTITY_ACTION,
          data: {},
        },
      })
      // dispatch({
      //     type: SET_MESSAGE,
      //     payload: {
      //         status: 200,
      //         data: {
      //             message: action + " Quantity Product Id: " + productId
      //         }
      //     }
      // })
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
