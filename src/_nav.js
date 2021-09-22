import React from "react"
import { NavLink } from "react-router-dom"
import Roles from "./router/config"

// icons
import * as FaIcons from "react-icons/fa"
import * as ImIcons from "react-icons/im"
import * as IoIcons from "react-icons/io"
import * as Io5Icons from "react-icons/io5"
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"

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
    permission: [
      // Roles.ADMIN,
      Roles.SUPER_ADMIN,
    ],
  },
  // {
  //   _component: "CNavItem",
  //   as: NavLink,
  //   anchor: "Inventory",
  //   to: "/app/inventory",
  //   icon: <FaIcons.FaBoxes size={20} style={iconMargin} />,
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  // },

  {
    _component: "CNavGroup",
    anchor: "Transactions",
    icon: <BsIcons.BsArrowLeftRight size={20} style={iconMargin} />,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Customer Orders",
        to: "/app/order",
        icon: <FaIcons.FaShoppingCart size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Sale",
        to: "/app/sale",
        icon: <FaIcons.FaPercent size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
    ],
  },
  // {
  //   _component: "CNavItem",
  //   as: NavLink,
  //   anchor: "Transactions",
  //   to: "/app/sale",
  //   icon: <FaIcons.FaPercent size={20} style={iconMargin} />,
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  // },
  {
    _component: "CNavGroup",
    anchor: "Inventory",
    icon: <AiIcons.AiOutlineStock size={20} style={iconMargin} />,
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Product",
        to: "/app/products/products",
        icon: <FaIcons.FaThLarge size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Brands",
        to: "/app/products/brand",
        icon: <FaIcons.FaTags size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Category",
        to: "/app/products/categories",
        icon: <ImIcons.ImTree size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Incoming Supply",
        to: "/app/supply",
        icon: <FaIcons.FaCartArrowDown size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Suppliers",
        to: "/app/suppliers",
        icon: <FaIcons.FaTruckLoading size={20} style={iconMargin} />,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
    ],
  },
  {
    _component: "CNavGroup",
    anchor: "Accounts",
    icon: <MdIcons.MdSupervisorAccount size={20} style={iconMargin} />,
    permission: [Roles.SUPER_ADMIN],
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        icon: <IoIcons.IoIosPeople size={20} style={iconMargin} />,
        anchor: "Employee ",
        to: "/app/employee",
        permission: [Roles.SUPER_ADMIN],
      },
      {
        _component: "CNavItem",
        as: NavLink,
        icon: <IoIcons.IoIosPeople size={20} style={iconMargin} />,
        anchor: "Customer ",
        to: "/app/customers",
        permission: [Roles.SUPER_ADMIN],
      },
    ],
  },
  {
    _component: "CNavGroup",
    anchor: "Reports",
    icon: <FaIcons.FaChartBar size={20} style={iconMargin} />,
    permission: [Roles.SUPER_ADMIN],
    items: [
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Report",
        to: "/app/reports/reports",
      },
      {
        _component: "CNavItem",
        as: NavLink,
        anchor: "Product Report",
        to: "/app/reports/product",
      },
    ],
  },
]

export default _nav
