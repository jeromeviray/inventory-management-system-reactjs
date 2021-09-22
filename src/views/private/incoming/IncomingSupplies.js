import React, { Component, Suspense } from 'react'
import {
     CNav,
     CNavItem,
     CNavLink, CTabContent,
     CTabPane, CSpinner,
     CButton,
     CForm,
     CInputGroup,
     CFormControl,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux';
//action
import { logout } from 'src/service/apiActions/userAction/userAction';
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction';
import { getIncomingSupplies } from 'src/service/apiActions/incomingSupplyAction/incomingSupplyAction';

// lazy fetch
const IncomingSuppliesByShipStatus = React.lazy(() => import('src/components/incomingSupplyTabContent/ship/IncomingSuppliesByPendingStatus'))
export class IncomingSupplies extends Component {
     state = {
          incomingSupplies: [],
          message: '',
          activeKey: 1
     }
     componentDidMount() {
          this.props.getIncomingSupplies().catch(() => {
               let { status, data } = this.props.messageResponse;
               if (status > 400 && status <= 403) {
                    this.props.logout()
                    this.props.clearMessage()
               }
               this.setState({
                    message: data.message,
               })
          })
     }
     componentDidUpdate(prevProps, prevState) {
          this.manageIncomingSupplies(prevProps, prevState);
     }
     manageIncomingSupplies = (prevProps, prevState) => {
          if (prevProps.incomingSupplyResponse !== this.props.incomingSupplyResponse) {
               let { action, status, data } = this.props.incomingSupplyResponse;
               if (action === "GET_INCOMING_SUPPLIES" && status === 200) {
                    this.setState({
                         incomingSupplies: data.incomingSupplies
                    })
               }
          }
     }
     render() {
          let { incomingSupplies, message, activeKey } = this.state;
          const tabStyle = {

               margin: "10px 0",
               padding: "12px 16px",
               overflow: "hidden"
          }
          return (
               <>
                    <div className="d-flex justify-content-between mb-4">
                         <CButton
                              shape="rounded-pill"
                              color="primary"
                              variant="ghost"
                              className="d-flex justify-content-center align-items-center"
                         // onClick={() =>
                         //      this.props.setProductModal(
                         //           !visible,
                         //           "Add",
                         //           <FaIcons.FaPlus size={20} />,
                         //      )
                         // }
                         >
                              <FaIcons.FaPlus size={20} />
                              <span style={{ marginLeft: "10px" }}>Create Incoming Supply</span>
                         </CButton>
                         <CForm className="w-50">
                              <CInputGroup>
                                   <CFormControl
                                        type="text"
                                        id="floatingInput"
                                        placeholder="Search"
                                        className="p-2"
                                   />
                                   <CButton
                                        type="button"
                                        color="info"
                                        variant="outline"
                                        id="button-addon2"
                                        className=""
                                   >
                                        <FaIcons.FaSearch />
                                   </CButton>
                              </CInputGroup>
                         </CForm>
                    </div>
                    <CNav
                         variant="pills"
                         role="tablist"
                         layout="fill"

                    // className="flex-column flex-sm-row"
                    >
                         <CNavItem>
                              <CNavLink
                                   href="#pending"
                                   active={activeKey === 1}
                                   onClick={() => {
                                        this.setState({ activeKey: 1 })
                                   }}
                              >
                                   Pending Supplies
                              </CNavLink>
                         </CNavItem>
                         <CNavItem>
                              <CNavLink
                                   href="#delivered"
                                   active={activeKey === 2}
                                   onClick={() => {
                                        this.setState({ activeKey: 2 })
                                   }}
                              >
                                   Delivered Supplies
                              </CNavLink>
                         </CNavItem>

                    </CNav>
                    <CTabContent style={tabStyle}>
                         <CTabPane
                              role="tabpanel"
                              aria-labelledby="ship-tab"
                              visible={activeKey === 1}
                         >
                              <Suspense fallback={<CSpinner color="primary" />}>
                                   <IncomingSuppliesByShipStatus />
                              </Suspense>
                         </CTabPane>
                         <CTabPane
                              role="tabpanel"
                              aria-labelledby="delivered-tab"
                              visible={activeKey === 2}
                         >
                         </CTabPane>
                    </CTabContent>
               </>
          )
     }
}
const mapStateToProps = (state) => {
     return {
          incomingSupplyResponse: state.incomingSupplyResponse,
          messageResponse: state.messageResponse,

     }
}
export default connect(mapStateToProps, {
     getIncomingSupplies,
     logout,
     clearMessage
})(IncomingSupplies)
