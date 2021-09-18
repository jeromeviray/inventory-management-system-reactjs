import React from "react"

import * as Faicons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
const iconStyle = {
    marginRight: "10px",
    fontSize: "20px"
}

export const topItems = [
    {
        pathName: "/home",
        title: "Home",
        icon: <Faicons.FaHome style={iconStyle} />,
    },
    {
        pathName: "/discover",
        title: "Discover",
        icon: <Faicons.FaRegCompass style={iconStyle} />
    },
    {
        pathName: "/sale",
        title: "Sale",
        icon: <AiIcons.AiFillTags style={iconStyle} />
    },
    {
        pathName: "/about",
        title: "About",
        icon: <AiIcons.AiFillInfoCircle style={iconStyle} />
    },
]
export const bottomItems = [
    {
        pathName: "/home",
        title: "Home",
        icon: <Faicons.FaHome style={iconStyle} />,
    },
    {
        pathName: "/discover",
        title: "Discover",
        icon: <Faicons.FaRegCompass style={iconStyle} />
    },
    {
        pathName: "/sale",
        title: "Sale",
        icon: <AiIcons.AiFillTags style={iconStyle} />
    },
    {
        pathName: "/user/profile",
        title: "Profile",
        icon: <MdIcons.MdAccountBox style={iconStyle} />
    },
]

const items = {
    topItems,
    bottomItems
}
export default items