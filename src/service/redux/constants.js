export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT = "GET_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const SAVE_PRODUCT = "SAVE_PRODUCT"
export const SAVE_FAIL = "SAVE_PRODUCT_FAIL"
export const UPDATE_FAIL = "UPDATE_PRODUCT_FAIL"
export const GET_IMAGE = "GET_IMAGE"
export const FAIL_GET_IMAGE = "FAIL_GET_IMAGE"
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS"
export const GET_PRODUCT_BY_CATEGORY_NAME = "GET_PRODUCT_BY_CATEGORY_NAME"

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
export const SET_PRODUCT_DETAILS_MODAL = "SET_PRODUCT_DETAILS_MODAL"
export const LOGIN_MODAL = "LOGIN_MODAL"
export const SET_ADDRESS_MODAL = "SET_ADDRESS_MODAL"
export const SET_SUPPLIER_MODAL = "SET_SUPPLIER_MODAL"
export const SET_SUPPLY_MODAL = "SET_SUPPLY_MODAL"
export const SET_SCAN_MODAL = "SET_SCAN_MODAL"
export const SET_PROMO_MODAL = "SET_PROMO_MODAL"

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
export const GET_DISCOVER_PRODUCT = "GET_DISCOVER_PRODUCT"
export const GET_PUBLIC_PRODUCT = "GET_PUBLIC_PRODUCT"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"

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
export const PLACE_ORDER = "PLACE_ORDER"
export const ORDER_ITEMS = "ORDER_ITEMS"
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID"

// customer address
export const SAVE_CUSTOMER_ADDRESS = "SAVE_CUSTOMER_ADDRESS"
export const UPDATE_CUSTOMER_ADDRESS = "UPDATE_CUSTOMER_ADDRESS"
export const GET_CUSTOMER_ADDRESSES = "GET_CUSTOMER_ADDRESSES"
export const GET_CUSTOMER_ADDRESS = "GET_CUSTOMER_ADDRESS"
export const DELETE_CUSTOMER_ADDRESS = "DELETE_CUSTOMER_ADDRESS"
/// account
export const GET_CUSTOMERS = "GET_CUSTOMERS"
export const GET_EMPLOYEES = "GET_EMPLOYEES"
export const SAVE_EMPLOYEE = "SAVE_EMPLOYEE"
export const CHANGE_PASSWORD = "CHANGE_PASSWORD"
export const DELETE_ACCOUNT = "DELETE_ACCOUNT"

//cart
export const ADD_TO_CART = "ADD_TO_CART"
export const GET_CART_ITEMS = "GET_CART_ITEMS"
export const REMOVE_ITEM = "REMOVE_ITEM"

//address
export const GET_ADDRESSES = "GET_ADDRESSES"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const SAVE_ADDRESS = "SAVE_ADDRESS"

// payment method
export const GET_PAYMENT_METHODS = "GET_PAYMENT_METHODS"
export const GET_PAYMENT_METHOD = "GET_PAYMENT_METHOD"

//inventory
export const GET_INVENTORIES = "GET_INVENTORIES"
export const GET_INVENTORY = "GET_INVENTORY"

// supplier
export const CREATE_SUPPLIER = "CREATE_SUPPLIER"
export const UPDATE_SUPPLIER = "UPDATE_SUPPLIER"
export const DELETE_SUPPLIER = "DELETE_SUPPLIER"
export const GET_SUPPLIERS = "GET_SUPPLIERS"
export const GET_SUPPLIER = "GET_SUPPLIER"

// incoming supply
export const SAVE_INCOMING_SUPPLY = "SAVE_INCOMING_SUPPLY"
export const GET_INCOMING_SUPPLIES = "GET_INCOMING_SUPPLIES"
export const GET_INCOMING_SUPPLIES_BY_PENDING_STATUS =
  "GET_INCOMING_SUPPLIES_BY_PENDING_STATUS"
export const GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS =
  "GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS"
export const GET_INCOMING_SUPPLY = "GET_INCOMING_SUPPLY"
export const DELETE_INCOMING_SUPPLY = "DELETE_INCOMING_SUPPLY"
export const UPDATE_INCOMING_SUPPLY = "UPDATE_INCOMING_SUPPLY"
export const DELIVERED_INCOMING_SUPPLY = "DELIVERED_INCOMING_SUPPLY"
export const SHIP_INCOMING_SUPPLY = "SHIP_INCOMING_SUPPLY"

// export const NO_IMAGE_BASE64 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
export const NO_IMAGE_BASE64 = "/default/no-image.jpg"
/// categories
export const SAVE_CATEGORY = "SAVE_CATEGORY"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const GET_CATEGORIES = "GET_CATEGORIES"
export const GET_CATEGORY = "GET_CATEGORY"
export const GET_CATEGORIES_LIST = "GET_CATEGORIES_LIST"

//promo
export const GET_PROMOS = "GET_PROMOS"
export const GET_PROMO = "GET_PROMO"
export const SAVE_PROMO = "SAVE_PROMO"
export const UPDATE_PROMO = "UPDATE_PROMO"
export const DELETE_PROMO = "DELETE_PROMO"
export const GET_DECODED_BARCODE = "GET_DECODED_BARCODE"
