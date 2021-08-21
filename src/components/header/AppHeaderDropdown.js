import React from 'react'
import {
  CAvatar,
  // CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import * as BiIcons from 'react-icons/bi'
import * as MdIcons from "react-icons/md"
import * as FiIcons from 'react-icons/fi'

import { Component } from 'react'
import { connect } from 'react-redux'


import eventBus from 'src/_helper/EventBus'
import { logout } from 'src/service/apiActions/userAction/userAction'

const style = {
  marginRight: "10px"
}
class AppHeaderDropdown extends Component {

  componentDidMount() {
    eventBus.on("logout", () => {
      this.logOut();
    });
  }
  componentDidUpdate() {
    eventBus.remove("logout")
  }
  handleLogOut = () => {
    window.location.reload();
    this.props.logout();

  }
  render() {
    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src="/avatars/8.jpg" size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>

          <CDropdownItem href="/app/dashboard">
            <MdIcons.MdAccountBox style={style} size={20} />
            Profile
          </CDropdownItem>
          <CDropdownItem href="#">
            <FiIcons.FiSettings style={style} size={20} />
            Settings
          </CDropdownItem>

          <CDropdownDivider />
          <CDropdownItem onClick={this.handleLogOut}>
            <BiIcons.BiLogOut size={20} style={style} />
            Log Out
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown >
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  logout
})(AppHeaderDropdown)
