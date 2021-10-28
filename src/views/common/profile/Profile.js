import React, { Component } from "react"
import { CCard, CCardTitle, CCardBody, CButton, CAvatar } from "@coreui/react"
import { connect } from "react-redux"
import { getMe } from "src/service/apiActions/accountAction/accountAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setAlertModal } from "src/service/apiActions/modalAction/modalAction"
import AlertModal from "src/components/modals/alert/AlertModal"
import AccountModal from "src/components/modals/account/AccountModal"
import * as MdIcons from "react-icons/md"
import { addAccountModal } from "src/service/apiActions/modalAction/modalAction"
import ChangePasswordModal from "src/components/modals/account/ChangePasswordModal"
import { changePasswordModal } from "src/service/apiActions/modalAction/modalAction"
import Roles from "src/router/config"

export class Profile extends Component {
  state = {
    message: "",
    account: [],
    visible: false,
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
    let { account, message, visible } = this.state
    // const id = account.account && account.account.id
    const { roles } = this.props.userResponse.credentials

    const margin = {
      marginBottom: "12px",
    }
    return (
      <>
        <AlertModal />
        <AccountModal />
        <ChangePasswordModal />
        {message && (
          <div className="form-group d-flex justify-content-center align-items-center">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CCard>
          <CCardBody className="p-4">
            {roles.roleName === Roles.SUPER_ADMIN ? (
              account.profileImage ? (
                <CAvatar
                  color="secondary"
                  src={account.profileImage}
                  size="xl"
                />
              ) : (
                <CAvatar color="info" size="xl">
                  <h1 className="p-0 m-0">
                    {account.firstName ? account.firstName.charAt(0) : "N"}
                  </h1>
                </CAvatar>
              )
            ) : (
              <></>
            )}
            <CCardTitle className="d-flex justify-content-between mt-3">
              <div className="font-style d-flex ">
                <div className="font-style d-flex flex-column align-items-start ">
                  {roles.roleName === Roles.SUPER_ADMIN ? (
                    <h6 className="m-0 pe-3 mb-2">Name:</h6>
                  ) : (
                    <></>
                  )}

                  <h6 className="m-0 pe-3 mb-2">Username:</h6>
                  <h6 className="m-0 pe-3 mb-2">Email:</h6>
                  <h6 className="m-0 pe-3 mb-2">Role:</h6>
                </div>
                <div className="font-style d-flex flex-column align-items-start text-black-50">
                  {roles.roleName === Roles.SUPER_ADMIN ? (
                    <strong style={{ ...margin }}>
                      {account.firstName && account.lastName ? (
                        <>
                          <span>{account.firstName}</span>
                          <span className="ps-1">{account.lastName}</span>
                        </>
                      ) : (
                        <span className="text-danger">No Name</span>
                      )}
                    </strong>
                  ) : (
                    <></>
                  )}
                  <strong style={{ ...margin }}>
                    {account.account && account.account.username}
                  </strong>
                  <strong style={{ ...margin }}>
                    {account.account && account.account.email}
                  </strong>
                  <strong style={{ ...margin }}>
                    {account.account && account.account.roles[0].roleName}
                  </strong>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-start mb-3">
                <CButton
                  color="info"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    this.props.addAccountModal(
                      !visible,
                      "Edit",
                      account,
                      <MdIcons.MdModeEdit size="20" className="me-2" />,
                    )
                  }
                >
                  <MdIcons.MdModeEdit size="20" />
                </CButton>
              </div>
            </CCardTitle>
            <hr />
            <CCardTitle style={{ margin: "0 auto", width: "80%" }}>
              <div className="d-flex justify-content-between text-center mb-5">
                {/* <div className="font-style  w-100">
                  <h6>Phone number</h6>
                  <strong className="text-black-50">
                    {account.phoneNumber === 0 ? (
                      <span className="text-warning">---</span>
                    ) : (
                      <span>{account.phoneNumber}</span>
                    )}
                  </strong>
                </div> */}
                <div className="font-style w-100">
                  <h6>Birthday</h6>
                  <strong className="text-black-50">
                    {account.birthday ? (
                      <span>{account.birthday}</span>
                    ) : (
                      <span className="text-warning">---</span>
                    )}
                  </strong>
                </div>
                <div className="font-style w-100">
                  <h6>Created Date</h6>
                  <strong className="text-black-50">
                    {account.account ? (
                      <span>{account.account.created}</span>
                    ) : (
                      <span className="text-warning">---</span>
                    )}
                  </strong>
                </div>
              </div>

            </CCardTitle>
            <hr />
            <CCardTitle>
              <div className="d-flex justify-content-between mb-5 mt-5">
                <div className="font-style  w-100">
                  <h6>Password</h6>
                </div>
                <div className="font-style text-end w-100">
                  <CButton
                    color="link"
                    onClick={() =>
                      this.props.changePasswordModal(
                        !visible,
                        "ChangePassword",
                        account,
                        <MdIcons.MdModeEdit size="20" className="me-2" />,
                      )
                    }
                  >
                    Change Password
                  </CButton>
                </div>
              </div>
            </CCardTitle>
          </CCardBody>
        </CCard>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    accountResponse: state.accountResponse,
    messageResponse: state.messageResponse,
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  getMe,
  addAccountModal,
  setAlertModal,
  changePasswordModal,
})(Profile)
