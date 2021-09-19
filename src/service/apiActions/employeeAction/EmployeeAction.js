import {
  GET_CUSTOMERS,
  GET_EMPLOYEES,
  SAVE_EMPLOYEE,
} from "src/service/redux/constants"
import AccountApiService from "src/service/restAPI/AccountApiService"
import { SET_MESSAGE } from "src/constants/userConstants"

export const getEmployees = (token) => async (dispatch) => {
  return AccountApiService.getAccountEmployees(token).then(
    (response) => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: {
          status: 200,
          action: "GETEMPLOYEES",
          data: {
            employees: response.data,
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
export const getCustomers = () => async (dispatch) => {
  return AccountApiService.getAccountCustomers().then(
    (response) => {
      dispatch({
        type: GET_CUSTOMERS,
        payload: {
          status: 200,
          action: "GETCUSTOMERS",
          data: {
            customers: response.data,
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
export const saveEmployee =
  (firstName, lastName, email, phoneNumber, username, password, token, role) =>
  async (dispatch) => {
    return AccountApiService.saveEmployeeAccount(
      firstName,
      lastName,
      email,
      phoneNumber,
      username,
      password,
      token,
      role,
    ).then(
      (response) => {
        dispatch({
          type: SAVE_EMPLOYEE,
          payload: {
            status: 200,
            action: "SAVEEMPLOYEE",
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
export const deleteEmployee = (id, token) => async (dispatch) => {
  return AccountApiService.deleteEmployee(id, token).then(
    (response) => {
      dispatch({
        type: SAVE_EMPLOYEE,
        payload: {
          status: 200,
          action: "SAVEEMPLOYEE",
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
