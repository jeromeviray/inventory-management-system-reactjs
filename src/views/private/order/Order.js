import React, { Component, Suspense } from 'react'
import {
    CNav,
    CNavItem,
    CNavLink, CTabContent,
    CTabPane, CSpinner

} from '@coreui/react'

// icon
// import * as FiIcons from 'react-icons/fi'
//component tab
const PendingOrder = React.lazy(() => import('src/components/orderTabContent/pending/PendingOrder'))
const ConfirmedOrder = React.lazy(() => import('src/components/orderTabContent/confirmed/ConfirmedOrder'));
const CompletedOrder = React.lazy(() => import('src/components/orderTabContent/completed/CompletedOrder'))
const DeliveryOrder = React.lazy(() => import("src/components/orderTabContent/delivery/DeliveryOrder"))
export class Order extends Component {
    state = {
        activeKey: 1,
    }
    render() {
        let { activeKey, } = this.state;
        const tabStyle = {

            margin: "10px 0",
            padding: "12px 16px",
            overflow: "hidden"
        }

        return (

            <>
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
                            onClick={() => { this.setState({ activeKey: 1 }) }}
                        >
                            Pending
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href="#confirmed"
                            active={activeKey === 2}
                            onClick={() => { this.setState({ activeKey: 2 }) }}
                        >
                            Confirmed
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href="#delivery"
                            active={activeKey === 3}
                            onClick={() => { this.setState({ activeKey: 3 }) }}
                        >
                            Delivery
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href="#completed"
                            active={activeKey === 4}
                            onClick={() => { this.setState({ activeKey: 4 }) }}
                        >
                            Completed
                        </CNavLink>
                    </CNavItem>
                </CNav>

                <CTabContent className="border" style={tabStyle}>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                        <Suspense fallback={<CSpinner color="primary" />}>
                            <PendingOrder />
                        </Suspense>

                    </CTabPane>
                    <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                        <Suspense fallback={<CSpinner color="primary" />}>
                            <ConfirmedOrder />
                        </Suspense>
                    </CTabPane>
                    <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                        <Suspense fallback={<CSpinner color="primary" />}>
                            <DeliveryOrder />
                        </Suspense>
                    </CTabPane>
                    <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                        <Suspense fallback={<CSpinner color="primary" />}>
                            <CompletedOrder />
                        </Suspense>
                    </CTabPane>
                </CTabContent>

                {/* </CContainer> */}

            </>
        )
    }
}

export default Order
