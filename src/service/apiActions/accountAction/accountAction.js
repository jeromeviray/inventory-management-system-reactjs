import {
  BAN_ACCOUNT,
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
  FORGOT_PASSWORD,
  GET_ME,
  GET_USERS_ACCOUNT,
  RESET_PASSWORD,
  SAVE_EMPLOYEE,
  UPDATE_USER,
  VALIDATE_TOKEN,
  VERIFY_ACCOUNT,
} from "src/service/redux/constants"
import AccountApiService from "src/service/restAPI/AccountApiService"
import { SET_MESSAGE } from "src/constants/userConstants"

export const getUsersAccount =
  (query, role, page, limit) => async (dispatch) => {
    return AccountApiService.getUsersAccount(query, role, page, limit).then(
      (response) => {
        dispatch({
          type: GET_USERS_ACCOUNT,
          payload: {
            status: 200,
            action: "USERSACCOUNT",
            data: {
              accounts: response.data,
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
  (
    firstName,
    lastName,
    email,
    phoneNumber,
    username,
    password,
    birthday,
    role,
  ) =>
    async (dispatch) => {
      return AccountApiService.saveEmployeeAccount(
        firstName,
        lastName,
        email,
        phoneNumber,
        username,
        password,
        birthday,
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
export const deleteAccount = (id) => async (dispatch) => {
  return AccountApiService.deleteAccount(id).then(
    (response) => {
      dispatch({
        type: DELETE_ACCOUNT,
        payload: {
          status: 200,
          action: "DELETEACCOUNT",
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
export const banAccount = (id) => async (dispatch) => {
  return AccountApiService.banAccount(id).then(
    (response) => {
      dispatch({
        type: BAN_ACCOUNT,
        payload: {
          status: 200,
          action: "BANACCOUNT",
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Banned",
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
export const changePassword =
  (id, currentPassword, newPassword, confirmPassword) => async (dispatch) => {
    return AccountApiService.changePassword(
      id,
      currentPassword,
      newPassword,
      confirmPassword,
    ).then(
      (response) => {
        dispatch({
          type: CHANGE_PASSWORD,
          payload: {
            status: 200,
            action: "changepassword",
            data: {},
          },
        })
        dispatch({
          type: SET_MESSAGE,
          payload: {
            status: 200,
            data: {
              message: "Password Change Successfully.",
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

export const forgotPassword = (email) => async (dispatch) => {
  console.log(email)
  return AccountApiService.forgotPassword(email).then(
    (response) => {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: {
          status: 200,
          action: FORGOT_PASSWORD,
          data: {},
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message:
              "The Forgot Password Token has been sent to your Email Address.",
            // {
            //   message:,
            //   note: "If you not Found the Email Message in your inbox, Try to look in your Spam. Thankyou!"
            // },
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

export const validateToken = (token) => async (dispatch) => {
  return AccountApiService.validateToken(token).then(
    (response) => {
      dispatch({
        type: VALIDATE_TOKEN,
        payload: {
          status: 200,
          action: VALIDATE_TOKEN,
          data: {
            tokenResponse: response.data,
          },
        },
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "",
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
export const resetPassword =
  (accoutnId, token, password, confirmPassword) => async (dispatch) => {
    return AccountApiService.resetPassword(
      accoutnId,
      token,
      password,
      confirmPassword,
    ).then(
      (response) => {
        dispatch({
          type: RESET_PASSWORD,
          payload: {
            status: 200,
            action: RESET_PASSWORD,
            data: {},
          },
        })
        dispatch({
          type: SET_MESSAGE,
          payload: {
            status: 200,
            data: {
              message: "Successfully Reset your Password",
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
export const getMe = () => async (dispatch) => {
  return AccountApiService.getMe().then(
    (response) => {
      dispatch({
        type: GET_ME,
        payload: {
          status: 200,
          action: GET_ME,
          data: {
            account: response.data,
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
export const updateUser =
  (id, firstName, lastName, phoneNumber, birthday) => async (dispatch) => {
    return AccountApiService.updateUser(
      id,
      firstName,
      lastName,
      phoneNumber,
      birthday,
    ).then(
      (response) => {
        dispatch({
          type: UPDATE_USER,
          payload: {
            status: 200,
            action: UPDATE_USER,
            data: {},
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
export const verifyCode = (code) => async (dispatch) => {
  return AccountApiService.verifyAccount(code).then(
    (response) => {
      dispatch({
        type: VERIFY_ACCOUNT,
        payload: {
          status: 200,
          action: VERIFY_ACCOUNT,
          data: {

          }
        }

      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Your Account has been Verified. Try To Login.",
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
    }
  )
}