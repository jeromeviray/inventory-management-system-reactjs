import { SET_PRODUCTEDITMODAL_VISIBILIT } from "src/components/redux/constants";

export const setProductModal = (visible) => async (dispatch) => {
    dispatch({
        type: SET_PRODUCTEDITMODAL_VISIBILIT,
        payload: {
            status: 200,
            data: {
                visible: visible
            }
        }
    })
}