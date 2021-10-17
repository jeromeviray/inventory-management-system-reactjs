import { SET_MESSAGE } from "src/constants/userConstants"
import {
  GET_TERMS_AND_CONDITION,
  SAVE_TERMS_AND_CONDITION,
  UPDATE_TERMS_AND_CONDITION,
} from "src/service/redux/constants"
import TermsAndCondionApiService from "src/service/restAPI/TermsAndCondiitonApiService"
export const saveTermsAndCondition = (content) => async (dispatch) => {
  return TermsAndCondionApiService.saveTermsAndCondition(content).then(
    (response) => {
      dispatch({
        type: SAVE_TERMS_AND_CONDITION,
        payload: {
          status: 200,
          action: SAVE_TERMS_AND_CONDITION,
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
export const updateTermsAndCondition = (id, content) => async (dispatch) => {
  return TermsAndCondionApiService.updateTermsAndCondition(id, content).then(
    (response) => {
      dispatch({
        type: UPDATE_TERMS_AND_CONDITION,
        payload: {
          status: 200,
          action: UPDATE_TERMS_AND_CONDITION,
          data: {
            termsAndCondition: response.data,
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
export const getTermsAndCondition = () => async (dispatch) => {
  return TermsAndCondionApiService.getTermsAndCondition().then(
    (response) => {
      dispatch({
        type: GET_TERMS_AND_CONDITION,
        payload: {
          status: 200,
          action: GET_TERMS_AND_CONDITION,
          data: {
            termsAndCondition: response.data,
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
