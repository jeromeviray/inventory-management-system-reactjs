// import RestApi from '../RestApi'

import { SET_MESSAGE } from 'src/constants/userConstants'
import ProductApiService from 'src/service/restAPI/ProductApiService'
import {
  // GET_PRODUCT,
  GET_PRODUCTS,
  SAVE_FAIL,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT
  SAVE_PRODUCT
} from '../../redux/constants'

export const saveProduct = (formData, token) => async (dispatch) => {
  return ProductApiService.save(formData, token)
    .then((response) => {
      dispatch({
        type: SAVE_PRODUCT
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Saved"
          }
        }
      })
      return Promise.resolve();

    },
      (error) => {
        const message = (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message || error.error_message ||
          error.toString();

        const status = (error.response &&
          error.response.data &&
          error.response.data.code) ||
          error.toString();
        dispatch({
          type: SAVE_FAIL
        })
        dispatch({
          type: SET_MESSAGE,
          payload: {
            status: status,
            data: {
              message: message
            }
          }
        })
        return Promise.reject();
      }
    )
}
export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
    payload: {
      status: 200,
      data: {
        products: [
          {
            productId: 1,
            productName: 'product',
            productPrice: 1234,
            productImageName: 'men.jpg',
            stock: 123,
          },
          {
            productId: 2,
            productName: 'jeans',
            productPrice: 1234,
            productImageName: 'men.jpg',
            stock: 123,
          },
          {
            productId: 3,
            productName: 'White Polo shirt',
            productPrice: 1234,
            productImageName: 'men.jpg',
          },
          {
            productId: 4,
            productName: 'mobile',
            productPrice: 1234,
            productImageName: 'men.jpg',
          },
          {
            productId: 6,
            productName: 'Datu puti',
            productPrice: 1234,
            productImageName: 'men.jpg',
          },
          {
            productId: 5,
            productName: 'palmolive',
            productPrice: 1234,
            productImageName: 'men.jpg',
          },
        ],
      },
    },
  })
}

export function getProduct() { }

export function deleteProduct() { }

export function updateProduct() { }

