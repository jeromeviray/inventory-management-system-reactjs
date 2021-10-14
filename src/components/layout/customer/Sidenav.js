import React, { Component } from "react"
import { CAvatar } from "@coreui/react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

//icon
import * as VscIcons from "react-icons/vsc"
import * as IoIcons from "react-icons/io5"
import * as BiIcons from "react-icons/bi"
import * as MdIcons from "react-icons/md"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getMe } from "src/service/apiActions/accountAction/accountAction"

import config from "../../../config"

export class Sidenav extends Component {
  state = {
    account: [],
  }

  componentDidMount() {
    this.getMe()
  }

  getMe = () => {
    this.props.getMe()
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageAccountReponse(prevProps, prevState)
  }

  manageAccountReponse = (prevProps, prevState) => {
    if (prevProps.accountResponse !== this.props.accountResponse) {
      const { status, action, data } = this.props.accountResponse
      if (status === 200 && action === "GET_ME") {
        this.setState({
          account: data.account,
        })
      }
    }
  }

  render() {
    let { account } = this.state
    const profile = account && account.profileImage
    return (
      <>
        <div className=" w-25 d-none d-lg-block pt-4 ">
          <div className="d-flex align-items-center flex-column">
            {account.profileImage ? (
              <CAvatar
                color="secondary"
                src={profile}
                size="xl"
                alt="user-profile"
              />
            ) : (
              <CAvatar color="info" size="xl">
                <h1 className="p-0 m-0">
                  {account.firstName ? account.firstName.charAt(0) : "N"}
                </h1>
              </CAvatar>
            )}
            <div className=" mt-3">
              {account.firstName && account.lastName ? (
                <h5>
                  <span>{account.firstName}</span>
                  <span className="ps-1">{account.lastName}</span>
                </h5>
              ) : (
                <h5>
                  <span className="text-danger">No Name</span>
                </h5>
              )}
            </div>
          </div>
          <div className="mt-5 side-nav-items">
            <ul className="side-nav-wrapper">
              <li className="mb-2 side-nav-list">
                <Link
                  to={config.api.private.prefixFrontendUrl + "/user/profile"}
                  className="side-nav-item d-flex align-items-center"
                >
                  <VscIcons.VscAccount size={20} />
                  <span className="ms-2">My Profile</span>
                </Link>
              </li>
              <li className="side-nav-list mb-2">
                <Link
                  to={config.api.private.prefixFrontendUrl + "/user/order"}
                  className="side-nav-item d-flex align-items-center"
                >
                  <IoIcons.IoBagCheck size={20} />
                  <span className="ms-2">My Order</span>
                </Link>
              </li>
              <li className="side-nav-list mb-2">
                <Link
                  to={config.api.private.prefixFrontendUrl + "/user/wishlist"}
                  className="side-nav-item d-flex align-items-center"
                >
                  <BiIcons.BiHistory size={20} />
                  <span className="ms-2">Wishlist</span>
                </Link>
              </li>
              <li className="side-nav-list mb-2">
                <Link
                  to={config.api.private.prefixFrontendUrl + "/user/addresses"}
                  className="side-nav-item d-flex align-items-center"
                >
                  <MdIcons.MdLocationOn size={20} />
                  <span className="ms-2">My Addresses</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    accountResponse: state.accountResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  getMe,
})(Sidenav)
