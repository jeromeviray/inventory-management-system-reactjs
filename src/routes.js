import React from "react"

// examples


const Dashboard = React.lazy(() => import("./views/admin/dashboard/Dashboard"))
const Products = React.lazy(() =>
  import("./views/admin/products/Products"),
)

const routes = [
  { path: "/", exact: true, name: "Admin" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/products", name: "Products", component: Products },

]

export default routes
