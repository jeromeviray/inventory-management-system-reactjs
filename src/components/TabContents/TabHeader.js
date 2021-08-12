import React, { Component } from 'react'
import {
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane
} from '@coreui/react'

import { NewArrivalProducts, RecommendProducts, PopularProducts } from '../public/index'

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
                    <CNavItem>
                        <CNavLink
                            active={activeKey === 3}
                            onClick={() => this.handleOnClick(3)}
                        >
                            Recommneded for you
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
                    <CTabPane visible={activeKey === 3}>
                        <RecommendProducts />
                    </CTabPane>

                </CTabContent>
            </>
        )
    }
}

export default TabHeader
