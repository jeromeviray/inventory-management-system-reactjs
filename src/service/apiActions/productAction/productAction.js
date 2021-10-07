// import RestApi from '../RestApi'
import { SET_MESSAGE } from "src/constants/userConstants"
import ProductApiService from "src/service/restAPI/ProductApiService"
import {
  DELETE_PRODUCT,
  FAIL_GET_IMAGE,
  GET_DISCOVER_PRODUCT,
  GET_IMAGE,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_BY_CATEGORY_NAME,
  GET_PRODUCT_DETAILS,
  SAVE_FAIL,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT
  SAVE_PRODUCT,
  SEARCH_PRODUCT,
  SET_PRODUCT_MESSAGE,
  UPDATE_PRODUCT,
} from "../../redux/constants"

export const saveProduct = (formData) => async (dispatch) => {
  return ProductApiService.saveProduct(formData).then(
    (response) => {
      dispatch({
        type: SAVE_PRODUCT,
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
      console.log(error)
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
      console.log(status)
      dispatch({
        type: SAVE_FAIL,
      })
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
export const getProducts = (query, page, limit) => async (dispatch) => {
  return ProductApiService.getProducts(query, page, limit).then(
    (response) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          status: 200,
          data: {
            products: response.data,
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
        type: SET_PRODUCT_MESSAGE,
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
export const getDiscoverProducts = (query, page, limit) => async (dispatch) => {
  return ProductApiService.getDiscoverProducts(query, page, limit).then(
    (response) => {
      dispatch({
        type: GET_DISCOVER_PRODUCT,
        payload: {
          status: 200,
          data: {
            products: response.data,
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
        type: SET_PRODUCT_MESSAGE,
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
export const getImage = (image, token) => async (dispatch) => {
  return ProductApiService.getImage(image, token).then(
    (response) => {
      console.log(response)
      dispatch({
        type: GET_IMAGE,
        payload: {
          status: response.status,
          data: {
            image: response.data,
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
        type: FAIL_GET_IMAGE,
      })
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
export const getProduct = (id) => async (dispatch) => {
  return ProductApiService.getProduct(id).then(
    (response) => {
      dispatch({
        type: GET_PRODUCT,
        payload: {
          status: 200,
          data: {
            product: response.data,
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
export const getProductDetails = (id) => async (dispatch) => {
  return ProductApiService.getProductDetails(id).then(
    (response) => {
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: {
          status: 200,
          data: {
            product: response.data,
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
export const deleteProduct = (id) => async (dispatch) => {
  return ProductApiService.deleteProduct(id).then(
    (response) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: {
          status: 200,
          action: DELETE_PRODUCT,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Deleted",
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

export const updateProduct = (productId, formData) => async (dispatch) => {
  return ProductApiService.updateProduct(productId, formData).then(
    (response) => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: {
          status: 200,
          action: UPDATE_PRODUCT,
          data: {
            updatedProduct: response.data,
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
export const searchProductByBarcodeOrName =
  (query, page, limit) => async (dispatch) => {
    return ProductApiService.searchProductByBarcodeOrName(
      query,
      page,
      limit,
    ).then(
      (response) => {
        dispatch({
          type: SEARCH_PRODUCT,
          payload: {
            status: 200,
            action: SEARCH_PRODUCT,
            data: {
              products: response.data,
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

export const getProductsByCategoryName =
  (categoryName, query, page, limit) => async (dispatch) => {
    return ProductApiService.getProductsByCategoryName(
      categoryName,
      query,
      page,
      limit,
    ).then(
      (response) => {
        dispatch({
          type: GET_PRODUCT_BY_CATEGORY_NAME,
          payload: {
            status: 200,
            action: GET_PRODUCT_BY_CATEGORY_NAME,
            data: {
              products: response.data,
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
