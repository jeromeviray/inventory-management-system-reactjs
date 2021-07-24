// import RestApi from '../RestApi'

import {
  // GET_PRODUCT,
  GET_PRODUCTS,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT
} from '../redux/constants'

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
