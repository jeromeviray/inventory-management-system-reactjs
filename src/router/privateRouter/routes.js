import React from "react"
import Roles from "../config/Roles"

// examples
// All Role has access
const Dashboard = React.lazy(() =>
  import("../../views/private/dashboard/Dashboard"),
)
const Profile = React.lazy(() => import("../../views/common/profile/Profile"))

// SUPER ADMIN has access
const Employee = React.lazy(() =>
  import("../../views/private/employee/Employee"),
)
const Reports = React.lazy(() => import("../../views/private/reports/Reports"))
const ProductReport = React.lazy(() =>
  import("../../views/private/reports/ProductReport"),
)
// const Company = React.lazy(() => import("../../views/private/company/Company"))
const Customer = React.lazy(() => import("src/views/private/customer/Customer"))
// SUPER ADMIN and ADMIN has access
const Products = React.lazy(() =>
  import("../../views/private/products/Products"),
)
// const Inventory = React.lazy(() =>
//   import("../../views/private/inventory/Inventory"),
// )
const Order = React.lazy(() => import("../../views/private/order/Order"))
const Sale = React.lazy(() => import("../../views/private/sale/Sale"))
const Brand = React.lazy(() =>
  import("../../views/private/products/brand/Brand"),
)
const Category = React.lazy(() =>
  import("../../views/private/products/category/Category"),
)
const IncomingPurchases = React.lazy(() => import('src/views/private/incoming/IncomingPurchases'))
const OutgoingOrders = React.lazy(() => import('src/views/private/outgoing/OutgoingOrders'))
// public routes
const Home = React.lazy(() => import("../../views/common/public/home/Home"))
const DiscoverProducts = React.lazy(() =>
  import("../../views/common/productFeatures/discover/DiscoverProducts"),
)
const SaleProducts = React.lazy(() =>
  import("../../views/common/productFeatures/sale/SaleProducts"),
)
const About = React.lazy(() => import("../../views/common/public/about/About"))
// const Checkout = React.lazy(() => import('src/views/common/cart/Checkout'))
// const CustomerAddress = React.lazy(() => import('src/views/common/cart/customerAddress/CustomerAddress'))
const Cart = React.lazy(() => import("src/views/common/cart/Cart"))

//common
const OrderDetails = React.lazy(() =>
  import("src/components/orderTabContent/OrderDetails"),
)

export const routes = [
  {
    path: "/app",
    exact: true,
    name: "Inventory",
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/dashboard",
    name: "Dashboard",
    component: Dashboard,
    permission: [
      Roles.SUPER_ADMIN,
      // Roles.ADMIN,
    ],
  },
  // {
  //   path: "/app/inventory",
  //   name: "Inventory",
  //   component: Inventory,
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  // },
  {
    exact: true,
    path: "/app/order",
    name: "Order",
    component: Order,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },

  {
    path: "/app/order/:id",
    name: "Details",
    component: OrderDetails,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/sale",
    name: "Sale",
    component: Sale,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/products",
    name: "Product",
    exact: true,
    component: Products,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/products/products",
    name: "Product",
    exact: true,
    component: Products,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/products/brand",
    name: "Brand",
    component: Brand,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/products/brand",
    name: "Brand",
    component: Brand,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/products/categories",
    name: "Categiries",
    component: Category,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  {
    path: "/app/purchases",
    name: "Incoming Purchases",
    component: IncomingPurchases,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
  // {
  //   path: "/app/outgoingorders",
  //   name: "Outgoing Orders",
  //   component: OutgoingOrders,
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  // },
  {
    path: "/app/employee",
    name: "Employee Accounts",
    component: Employee,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: "/app/customers",
    name: "Customer Accounts",
    component: Customer,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: "/app/reports",
    exact: true,
    name: "Reports",
    component: Reports,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: "/app/reports/reports",
    exact: true,
    name: "Reports",
    component: Reports,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: "/app/reports/product",
    name: "Product Report",
    component: ProductReport,
    permission: [Roles.SUPER_ADMIN],
  },
  {
    path: "/app/profile",
    exact: true,
    name: "Profile",
    component: Profile,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  },
]

export const publicRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/discover",
    name: "Discover",
    component: DiscoverProducts,
  },
  {
    path: "/sale",
    name: "Sale",
    component: SaleProducts,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    exact: true,
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

  {
    exact: true,
    path: "/user/profile",
    name: "Profile",
    component: Profile,
  },
  {
    exact: true,
    path: "/user/order",
    name: "Order",
    component: Order,
  },
  {
    exact: true,
    path: "/user/order/:id",
    name: "Details",
    component: OrderDetails,
  },
]
const routers = {
  routes,
  publicRoutes,
}
export default routers
