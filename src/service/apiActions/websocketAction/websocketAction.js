import { WEBSOCKET_REF, WEBSOCKET_EVENT } from "src/service/redux/constants";

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

export const websocketEvent = (data) => async (dispatch) => {
    dispatch({
        type: WEBSOCKET_EVENT,
        payload: {
            status: 200,
            action: "WEBSOCKET_EVENT",
            data: data
        }
    })
}