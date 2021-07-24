import { GET_CAROUSEL_IMAGES, CAROUSEL_FOLDER_DIRECTORY } from "../../../redux/constants";

export const getCarouselImages = () => async (dispatch) => {
    dispatch({
        type: GET_CAROUSEL_IMAGES,
        payload: {
            status: 200,
            data: {
                carouselImages: [
                    {
                        fileName: CAROUSEL_FOLDER_DIRECTORY + "rick.jpg"
                    },
                    {
                        fileName: CAROUSEL_FOLDER_DIRECTORY + "NicePng_warehouse-icon-png_1212543.png"
                    }
                ]
            }
        }
    });

}