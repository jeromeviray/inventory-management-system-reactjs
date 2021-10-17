import { WEBSOCKET_REF } from "src/service/redux/constants";

export const initWebhook = (data) => async (dispatch) => {
    dispatch({
        type: WEBSOCKET_REF,
        payload: {
            status: 200,
            action: "WEBSOCKET_REF",
            data: data
        }
    })
}
