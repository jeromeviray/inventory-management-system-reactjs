import React from "react"

import * as Faicons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"

import config from "../../../config"

const iconStyle = {
  marginRight: "10px",
  fontSize: "20px",
}

export const topItems = [
  {
    pathName: config.api.private.prefixFrontendUrl + "/home",
    title: "Home",
    icon: <Faicons.FaHome style={iconStyle} />,
  },
  {
    pathName: config.api.private.prefixFrontendUrl + "/discover",
    title: "Discover",
    icon: <Faicons.FaRegCompass style={iconStyle} />,
  },
  {
    pathName: config.api.private.prefixFrontendUrl + "/about",
    title: "About",
    icon: <AiIcons.AiFillInfoCircle style={iconStyle} />,
  },
]
export const bottomItems = [
  {
    pathName: config.api.private.prefixFrontendUrl + "/home",
    title: "Home",
    icon: <Faicons.FaHome style={iconStyle} />,
  },
  {
    pathName: config.api.private.prefixFrontendUrl + "/products",
    title: "Discover",
    icon: <Faicons.FaRegCompass style={iconStyle} />,
  },
  {
    pathName: config.api.private.prefixFrontendUrl + "/user/profile",
    title: "Profile",
    icon: <MdIcons.MdAccountBox style={iconStyle} />,
  },
]

const items = {
  topItems,
  bottomItems,
}
export default items
