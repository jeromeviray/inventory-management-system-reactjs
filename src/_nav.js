import React from "react"
import { NavLink } from "react-router-dom"
import Roles from "./router/config";

// icons
import * as FaIcons from "react-icons/fa"
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";

const iconMargin = {
  marginRight: "10px",
}
const _nav = [
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Dashboard",
    to: "/app/dashboard",
    icon: <FaIcons.FaTachometerAlt size={20} style={iconMargin} />,
    badge: {
      color: "info",
      text: "NEW",
    },
    permission: [
      Roles.ADMIN,
      Roles.SUPER_ADMIN,
      Roles.CUSTOMER,
      Roles.USER,
      Roles.ROLE_USER
    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Inventory",
    to: "/app/inventory",
    icon: <FaIcons.FaBoxes size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN,
      Roles.ADMIN,

    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Order",
    to: "/app/order",
    icon: <FaIcons.FaShoppingCart size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN,
      Roles.ADMIN,
      Roles.CUSTOMER,
      Roles.USER,
      Roles.ROLE_USER
    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Sale",
    to: "/app/sale",
    icon: <FaIcons.FaPercent size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN,
      Roles.ADMIN,

    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,

    anchor: "Product",
    to: "/app/products",
    icon: <FaIcons.FaThLarge size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN,
      Roles.ADMIN,

    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Brands",
    to: "/app/products/brand",
    icon: <FaIcons.FaTags size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN,
      Roles.ADMIN,

    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Category",
    to: "/app/products/category",
    icon: <ImIcons.ImTree size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN,
      Roles.ADMIN,
    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    icon: <IoIcons.IoIosPeople size={20} style={iconMargin} />,
    anchor: "Employee",
    to: "/app/employee",
    permission: [
      Roles.SUPER_ADMIN
    ]
  },
  {
    _component: "CNavItem",
    as: NavLink,
    icon: <FaIcons.FaWarehouse size={20} style={iconMargin} />,
    anchor: "Branch",
    to: "/app/branch",
    permission: [
      Roles.SUPER_ADMIN
    ]
  },
  {
    _component: "CNavGroup",
    anchor: "Reports",
    icon: <FaIcons.FaChartBar size={20} style={iconMargin} />,
    permission: [
      Roles.SUPER_ADMIN
    ],
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Report",
        to: "/app/reports",
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Product Report",
        to: "/app/reports/product",
      }
    ],
  },

]

export default _nav
