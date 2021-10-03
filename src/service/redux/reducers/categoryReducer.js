const {
  SAVE_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES_LIST,
} = require("../constants")

const categoryReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SAVE_CATEGORY:
      return {
        action: payload.action,
        status: payload.status,
        data: {},
      }
    case GET_CATEGORIES:
      return {
        action: payload.action,
        status: payload.status,
        data: {
          categories: payload.data.categories,
        },
      }
    case GET_CATEGORY:
      return {
        action: payload.action,
        status: payload.status,
        data: {
          category: payload.data.category,
        },
      }
    case UPDATE_CATEGORY:
      return {
        action: payload.action,
        status: payload.status,
        data: {
          updatedCategory: payload.data.updatedCategory,
        },
      }
    case DELETE_CATEGORY:
      return {
        action: payload.action,
        status: payload.status,
        data: {},
      }
    case GET_CATEGORIES_LIST:
      return {
        action: payload.action,
        status: payload.status,
        data: {
          categoriesList: payload.data.categoriesList,
        },
      }
    default:
      return state
  }
}
export default categoryReducer
