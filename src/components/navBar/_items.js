import React from "react"

import * as Faicons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
const iconStyle = {
    marginRight: "10px",
    fontSize: "20px"
}

const _items = [
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
export default _items