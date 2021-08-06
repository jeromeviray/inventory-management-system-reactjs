import React from "react"

// examples

const Dashboard = React.lazy(() => import("./views/admin/dashboard/Dashboard"))
const Products = React.lazy(() => import("./views/admin/products/Products"))

const routes = [
  { path: "/", exact: true, name: "Admin" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/products", name: "Product", component: Products },
  { path: "/products/brand", name: "Brand", component: Products },
  { path: "/products/category", name: "Category", component: Products },
]

export default routes
