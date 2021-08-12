import React from "react"

// examples

const Dashboard = React.lazy(() => import("./views/admin/dashboard/Dashboard"))
const Products = React.lazy(() => import("./views/admin/products/Products"))
// public routes
const Home = React.lazy(() => import("../src/views/public/home/Home"))

export const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  { path: "/admin/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/admin/products", name: "Product", component: Products },
  { path: "/admin/products/brand", name: "Brand", component: Products },
  { path: "/admin/products/category", name: "Category", component: Products },
]

export const publicRoutes = [
  { path: "/home", name: "Home", component: Home, exact: true },

]
const routers = {
  routes, publicRoutes
}
export default routers