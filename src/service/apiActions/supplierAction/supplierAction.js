import { SET_MESSAGE } from "src/constants/userConstants"
import {
  CREATE_SUPPLIER,
  DELETE_SUPPLIER,
  GET_SUPPLIER,
  GET_SUPPLIERS,
  UPDATE_SUPPLIER,
} from "src/service/redux/constants"
import SupplierApiService from "src/service/restAPI/SupplierApiService"

export const createSupplier = (name) => async (dispatch) => {
  return SupplierApiService.createSupplier(name).then(
    (response) => {
      dispatch({
        type: CREATE_SUPPLIER,
        payload: {
          status: 200,
          action: CREATE_SUPPLIER,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Created.",
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
export const updateSupplier = (id, name) => async (dispatch) => {
  return SupplierApiService.updateSupplier(id, name).then(
    (response) => {
      dispatch({
        type: UPDATE_SUPPLIER,
        payload: {
          status: 200,
          action: UPDATE_SUPPLIER,
          data: {
            supplier: response.data,
          },
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
// export const deleteSupplier = (id) => async (dispatch) => {
//   return SupplierApiService.deleteSupplier(id).then(
//     (response) => {
//       dispatch({
//         type: DELETE_SUPPLIER,
//         payload: {
//           status: 200,
//           action: GET_SUPPLIERS,
//           data: {},
//         },
//       })
//       dispatch({
//         type: SET_MESSAGE,
//         payload: {
//           status: 200,
//           data: {
//             message: "Successfully Deleted.",
//           },
//         },
//       })
//       return Promise.resolve()
//     },
//     (error) => {
//       const errorMessage =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()

//       const status =
//         (error.response && error.response.data && error.response.data.code) ||
//         error.toString()

//       dispatch({
//         type: SET_MESSAGE,
//         payload: {
//           status: status,
//           data: {
//             message: errorMessage,
//           },
//         },
//       })
//       return Promise.reject()
//     },
//   )
// }
export const deleteSupplier = (id) => async (dispatch) => {
  return SupplierApiService.deleteSupplier(id).then(
    (response) => {
      console.log(response)
      dispatch({
        type: DELETE_SUPPLIER,
        payload: {
          status: 200,
          action: "DELETESUPPLIER",
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
export const getSuppliers = () => async (dispatch) => {
  return SupplierApiService.getSuppliers().then(
    (response) => {
      dispatch({
        type: GET_SUPPLIERS,
        payload: {
          status: 200,
          action: GET_SUPPLIERS,
          data: {
            suppliers: response.data,
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

export const getSupplier = (id) => async (dispatch) => {
  return SupplierApiService.getSupplier(id).then(
    (response) => {
      dispatch({
        type: GET_SUPPLIER,
        payload: {
          status: 200,
          action: GET_SUPPLIER,
          data: {
            supplier: response.data,
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
