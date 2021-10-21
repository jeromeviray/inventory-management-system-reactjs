import React from "react"
import Roles from "../config/Roles"

import config from "../../config"

// examples
// All Role has access
const Dashboard = React.lazy(() =>
  import("../../views/private/dashboard/Dashboard"),
)
const Profile = React.lazy(() => import("../../views/common/profile/Profile"))

// SUPER ADMIN has access
const Employee = React.lazy(() =>
  import("../../views/private/accounts/employee/Employee"),
)
const Reports = React.lazy(() => import("../../views/private/reports/Reports"))
const ProductReport = React.lazy(() =>
  import("../../views/private/reports/ProductReport"),
)
// const Company = React.lazy(() => import("../../views/private/company/Company"))
const Customer = React.lazy(() =>
  import("src/views/private/accounts/customer/Customer"),
)
// SUPER ADMIN and ADMIN has access
const Products = React.lazy(() =>
  import("../../views/private/products/Products"),
)
const Promo = React.lazy(() => import("src/views/private/products/promo/Promo"))

const Order = React.lazy(() => import("../../views/private/order/Order"))
const Wishlist = React.lazy(() =>
  import("../../views/private/wishlist/WishlistController"),
)
const Sale = React.lazy(() => import("../../views/private/sale/Sale"))
const Brand = React.lazy(() =>
  import("../../views/private/products/brand/Brand"),
)
const Category = React.lazy(() =>
  import("../../views/private/products/category/Category"),
)
const IncomingSupplies = React.lazy(() =>
  import("src/views/private/incoming/IncomingSuppliesController"),
)
const IncomingSuppliesDetails = React.lazy(() =>
  import("src/views/private/incoming/IncomingSuppliesDetails"),
)
const Suppliers = React.lazy(() =>
  import("src/views/private/supplier/Supplier"),
)
// public routes
const Home = React.lazy(() => import("../../views/common/public/home/Home"))
const DiscoverProducts = React.lazy(() =>
  import("../../views/common/productFeatures/discover/DiscoverProducts"),
)
const PromoProducts = React.lazy(() =>
  import("../../views/common/productFeatures/promo/PromoProducts"),
)
const PopularProducts = React.lazy(() => import("src/views/common/productFeatures/popularController/PopularProductController"))
const About = React.lazy(() => import("../../views/common/public/about/About"))
// const Checkout = React.lazy(() => import('src/views/common/cart/Checkout'))
// const CustomerAddress = React.lazy(() => import('src/views/common/cart/customerAddress/CustomerAddress'))
const Cart = React.lazy(() => import("src/views/common/cart/Cart"))
const ProductsCategory = React.lazy(() =>
  import("src/views/common/productFeatures/productsCategory/ProductsCategory"),
)
const ProductsSearchResult = React.lazy(() =>
  import("src/views/common/productFeatures/ProductsSearchResult"),
)
//common
const OrderDetails = React.lazy(() =>
  import("src/components/orderTabContent/OrderDetails"),
)
const ProductDetails = React.lazy(() =>
  import("src/views/common/productFeatures/details/ProductDetails"),
)
const CustomerAddressController = React.lazy(() =>
  import("src/views/common/address/CustomerAddressController"),
)
const TermsAndConditionController = React.lazy(() =>
  import("src/views/private/termsAndCondition/TermsAndConditionController"),
)
const StoreInformation = React.lazy(() =>
  import("src/views/private/store/StoreInformation"),
)
const TermsAndCondition = React.lazy(() => import("src/views/common/termsAndCondition/TermsAndCondition"))
export const routes = [
  {
    path: config.api.private.prefixFrontendUrl + "/app",
    exact: true,
    name: "Inventory",
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/dashboard",
    name: "Dashboard",
    component: Dashboard,
    permission: [
      Roles.SUPER_ADMIN,
      // Roles.ADMIN,
    ],
  },
  // {
  //   path: config.api.private.prefixFrontendUrl + "/app/inventory",
  //   name: "Inventory",
  //   component: Inventory,
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  // },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/app/order",
    name: "Order",
    component: Order,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },

  {
    path: config.api.private.prefixFrontendUrl + "/app/order/:id",
    name: "Details",
    component: OrderDetails,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/sale",
    name: "Order Sales Report",
    component: Sale,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/products",
    name: "Product",
    exact: true,
    component: Products,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/products/products",
    name: "Product",
    exact: true,
    component: Products,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/products/brand",
    name: "Brand",
    component: Brand,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/products/brand",
    name: "Brand",
    component: Brand,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/products/categories",
    name: "Categories",
    component: Category,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/products/promo",
    name: "Promo",
    component: Promo,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/app/supply",
    name: "Incoming supply",
    component: IncomingSupplies,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/supply/:id",
    name: "Details",
    component: IncomingSuppliesDetails,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/suppliers",
    name: "Suppliers",
    component: Suppliers,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/employee",
    name: "Employee Accounts",
    component: Employee,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/customers",
    name: "Customer Accounts",
    component: Customer,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/reports",
    exact: true,
    name: "Reports",
    component: ProductReport,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/reports/product",
    name: "Product Report",
    component: ProductReport,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/profile",
    exact: true,
    name: "Profile",
    component: Profile,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/store",
    exact: true,
    name: "Store Information",
    component: StoreInformation,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: config.api.private.prefixFrontendUrl + "/app/terms",
    exact: true,
    name: "Terms and Condition",
    component: TermsAndConditionController,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
]

export const publicRoutes = [
  {
    path: config.api.private.prefixFrontendUrl + "/",
    name: "Home",
    exact: true,
  },
  {
    path: config.api.private.prefixFrontendUrl + "/home",
    name: "Home",
    component: Home,
  },

  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/products",
    name: "Discover",
    component: DiscoverProducts,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/products/product/:query",
    name: "Product Details",
    component: ProductDetails,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/products/:query",
    name: "Product Search Result",
    component: ProductsSearchResult,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/products/all/promo",
    name: "Promo Products",
    component: PromoProducts,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/products/all/popular",
    name: "Propular Products",
    component: PopularProducts,
  },
  {
    exact: true,
    path:
      config.api.private.prefixFrontendUrl + "/products/category/:categoryName",
    name: "Products By Category",
    component: ProductsCategory,
  },
  {
    path: config.api.private.prefixFrontendUrl + "/about",
    name: "About",
    component: About,
  },

  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    exact: true,
    path:
      config.api.private.prefixFrontendUrl +
      "/cart/:orderId/payment/:paymentStatus",
    name: "Cart",
    component: Cart,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/user/profile",
    name: "Profile",
    component: Profile,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/user/addresses",
    name: "Address",
    component: CustomerAddressController,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/user/order",
    name: "Order",
    component: Order,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/user/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    exact: true,
    path: config.api.private.prefixFrontendUrl + "/user/order/:id",
    name: "Details",
    component: OrderDetails,
  },
  {
    exact: true,
    path:
      config.api.private.prefixFrontendUrl +
      "/termsandconditions",
    name: "Terms and Conditions",
    component: TermsAndCondition,
  },
]
const routers = {
  routes,
  publicRoutes,
}
export default routers
