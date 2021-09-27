import { SET_MESSAGE } from "src/constants/userConstants"
import {
  DELETE_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  SAVE_CATEGORY,
  UPDATE_CATEGORY,
} from "src/service/redux/constants"
import CategoriesApiService from "src/service/restAPI/CategoriesApiService"

export const saveCategory = (categoryName) => async (dispatch) => {
  return CategoriesApiService.saveCategory(categoryName).then(
    (response) => {
      dispatch({
        type: SAVE_CATEGORY,
        payload: {
          status: 200,
          action: SAVE_CATEGORY,
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
export const getCategories = () => async (dispatch) => {
  return CategoriesApiService.getCategories().then(
    (response) => {
      dispatch({
        type: GET_CATEGORIES,
        payload: {
          status: 200,
          action: GET_CATEGORIES,
          data: {
            categories: response.data,
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
export const getCategory = (id) => async (dispatch) => {
  return CategoriesApiService.getCategory(id).then(
    (response) => {
      dispatch({
        type: GET_CATEGORY,
        payload: {
          status: 200,
          action: GET_CATEGORY,
          data: {
            category: response.data,
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
export const updateCategory = (id, name) => async (dispatch) => {
  return CategoriesApiService.updateCategory(id, name).then(
    (response) => {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: {
          status: 200,
          action: UPDATE_CATEGORY,
          data: {
            updatedCategory: response.data,
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

export const deleteCategory = (id) => async (dispatch) => {
  return CategoriesApiService.deleteCategory(id).then(
    (response) => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: {
          status: 200,
          action: DELETE_CATEGORY,
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