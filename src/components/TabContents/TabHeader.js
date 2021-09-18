import React, { Component } from 'react'
import {
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane
} from '@coreui/react'

import { NewArrivalProducts, PopularProducts } from '../public/index'
import { connect } from 'react-redux'

export class TabHeader extends Component {
    state = {
        activeKey: 1
    }
    handleOnClick = (value) => {
        this.setState({
            activeKey: value
        })
    }
    render() {
        const { activeKey } = this.state;
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <>
                <CNav variant="tabs" className="justify-content-center ">
                    <CNavItem>
                        <CNavLink
                            active={activeKey === 1}
                            onClick={() => this.handleOnClick(1)}
                        >
                            New Arrivals
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            active={activeKey === 2}
                            onClick={() => this.handleOnClick(2)}
                        >
                            Popular
                        </CNavLink>
                    </CNavItem>

                </CNav>
                <CTabContent>
                    <CTabPane visible={activeKey === 1}>
                        <NewArrivalProducts />
                    </CTabPane>
                    <CTabPane visible={activeKey === 2}>
                        <PopularProducts />
                    </CTabPane>


                </CTabContent>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    const isLoggedIn = state.userResponse.isLoggedIn;

    return {
        isLoggedIn
    }
}
export default connect(mapStateToProps)(TabHeader)
