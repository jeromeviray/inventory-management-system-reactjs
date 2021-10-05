const { GET_DECODED_BARCODE } = require("../constants");

const scannerReducer = (state = {}, action) => {


    switch (action.type) {
        case GET_DECODED_BARCODE:
            return {
                decoded: action.payload.decoded,
                action: action.payload.action
            }
        default:
            return state;
    }
}
export default scannerReducer