import { SET_MESSAGE } from "src/constants/userConstants";
import { GET_INVENTORIES, GET_INVENTORY } from "src/service/redux/constants";
import InventoryApiService from "src/service/restAPI/InventoryApiService"

export const getInventories = (query = "", page = 0, limit = 10) => async (dispatch) => {
    return InventoryApiService.getInventories(query, page, limit).then(
        (response) => {
            console.log(response.data)
            dispatch({
                type: GET_INVENTORIES,
                payload: {
                    status: 200,
                    action: 'GETINVENTORIES',
                    data: {
                        inventories: response.data
                    }
                }
            })
            return Promise.resolve();
        },
        (error) => {
            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            const status = (error.response &&
                error.response.data &&
                error.response.data.code) ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: status,
                    data: {
                        message: errorMessage
                    }
                }
            })
            return Promise.reject();
        }
    )
}

// export const getInventory = (id) => async (dispatch) => {
//     return InventoryApiService.getInventory(id).then(
//         (response) => {
//             dispatch({
//                 type: GET_INVENTORY,
//                 payload: {
//                     status: 200,
//                     action: 'GETINVENTORY',
//                     data: {
//                         inventory: response.data
//                     }
//                 }
//             })
//             return Promise.resolve();
//         },
//         (error) => {
//             const errorMessage =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();

//             const status = (error.response &&
//                 error.response.data &&
//                 error.response.data.code) ||
//                 error.toString();

//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: {
//                     status: status,
//                     data: {
//                         message: errorMessage
//                     }
//                 }
//             })
//             return Promise.reject();
//         }
//     )
// }