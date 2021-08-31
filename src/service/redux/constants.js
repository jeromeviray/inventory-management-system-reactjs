export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT = "GET_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const SAVE_PRODUCT = "SAVE_PRODUCT"
export const SAVE_FAIL = "SAVE_PRODUCT_FAIL"
export const UPDATE_FAIL = "UPDATE_PRODUCT_FAIL"
export const GET_IMAGE = "GET_IMAGE"
export const FAIL_GET_IMAGE = "FAIL_GET_IMAGE"

export const SET_IMAGE_MESSAGE = "SET_IMAGE_MESSAGE"
export const SET_PRODUCT_MESSAGE = "SET_PRODUCT_MESSAGE"

//carousel
export const GET_CAROUSEL_IMAGES = "GET_CAROUSEL_IMAGES"
export const CAROUSEL_FOLDER_DIRECTORY = "/carousel/"

//sidebar
export const SET_SIDEBAR = "SET_SIDEBAR"
export const SET_SIDEBAR_UNFOLD = "SET_SIDEBAR_UNFOLD"

//modal
export const SET_PRODUCTEDITMODAL_VISIBILIT = "PRODUCT_EDITOR_MODAL"
export const EDIT_PRODUCT_MODAL = "EDIT_PRODUCT_MODEL"
export const ALERT_MODAL = "ALERT_MODAL"
export const ADD_BRANCH_MODAL = " ADD_BRANCH_MODAL"
export const ADD_BRAND_MODAL = "ADD_BRAND_MODAL"
export const ADD_CATEGORY_MODAL = "ADD_CATEGORY_MODAL"
export const ADD_EMPLOYEE_MODAL = "ADD_EMPLOYEE_MODAL"
// endpoint constalnts
export const API_BASE_URL = "http://localhost:4480"
export const FRONT_END_BASED_URL = "http://localhost:4000"

export const OAUTH2_REDIRECT_URI = "http://localhost:4000/oauth2/redirect"

export const ACCESS_TOKEN = "accessToken"
export const REFRESH_TOKEN = "refreshToken"
export const USERNAME = "username"
export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI




// product branch
export const GET_BRANCH = "GET_BRANCH"
export const GET_BRANCH_TOTAL_PRODUCT = "GET_BRANCH_TOTAL_PRODUCT"
export const SAVE_BRANCH = "SAVE_BRANCH"
export const UPDATE_BRANCH = "UPDATE_BRANCH"
export const DELETE_BRANCH = "DELETE_BRANCH"

// brand
export const GET_BRANDS = "GET_BRANDS"
export const GET_BRAND = "GET_BRAND"
export const SAVE_BRAND = "SAVE_BRAND"
export const UPDATE_BRAND = "UPDATE_BRAND"
export const DELETE_BRAND = "DELETE_BRAND"
export const FAIL_BRAND = "FAIL_BRAND"
export const CLEAR_BRAND = "CLEAR_BRAND"


// order
export const GET_PENDING_ORDER = "GET_PENDING_ORDER"
export const GET_CONFIRMED_ORDER = "GET_CONFIRMED_ORDER"
export const GET_DELIVERY_ORDER = "GET_DELIVERY_ORDER"
export const GET_COMPLETED_ORDER = "GET_COMPLETED_ORDER"
export const CONFIRM_ORDER = "CONFIRM_ORDER"
