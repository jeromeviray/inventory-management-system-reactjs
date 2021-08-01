import React from "react"
import { CNavbar, CNavbarBrand, CContainer } from "@coreui/react"

const Register = () => {
  return (
    <>
      <CNavbar colorScheme="dark" className="bg-dark" placement="sticky-top">
        <CContainer fluid className="ps-3 pe-3">
          <CNavbarBrand href="/">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>
      <div
        className="d-flex justify-content-between  text-dark"
        style={{ height: "95vh" }}
      >
        <CContainer
          className=" d-flex
            justify-content-center
             align-items-center
             right-to-left
             border"
        >
          {" "}
          fas
        </CContainer>
      </div>
    </>
  )
}

export default Register
