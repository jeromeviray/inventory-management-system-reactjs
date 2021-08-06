import React from "react"
import * as FaIcons from "react-icons/fa"
import { NavLink } from "react-router-dom"

const iconMargin = {
  marginRight: "10px",
}
const _nav = [
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Dashboard",
    to: "/dashboard",
    icon: <FaIcons.FaTachometerAlt size={20} style={iconMargin} />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _component: "CNavGroup",
    anchor: "Product Management",
    to: "/product/manangement",
    icon: <FaIcons.FaThLarge size={20} style={iconMargin} />,
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Products",
        to:"/products"
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Brand",
        to:"/products/brand"
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Category",
        to:"/products/category"
      }
    ]
  },
  {
    _component: "CNavGroup",
    anchor: "Pages",
    icon: <FaIcons.FaUserAlt size={20} style={iconMargin} />,
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Login",
        to: "/login",
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Register",
        to: "/register",
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Error 404",
        to: "/404",
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Error 500",
        to: "/500",
      },
    ],
  },
]

export default _nav
