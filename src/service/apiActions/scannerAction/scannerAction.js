import { GET_DECODED_BARCODE } from "src/service/redux/constants"

export const getDecodedBarcode = (decoded, action) => async (dispatch) => {
    dispatch({
        type: GET_DECODED_BARCODE,
        payload: {
            action: action,
            decoded: decoded
        }
    })
}