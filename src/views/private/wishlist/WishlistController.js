import React, { Component, Suspense } from "react"
import { connect } from 'react-redux'

import {
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CSpinner,
    CForm,
    CInputGroup,
    CFormControl,
    CButton,
    CBadge,
} from "@coreui/react"
import { DotLoader } from "react-spinners"

import * as FaIcons from "react-icons/fa"

const Wishlist = React.lazy(() =>
    import("src/components/wishlist/wishlist"),
)

export class WishlistController extends Component {
    state = {
        query: '',
    }

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        this.setState({ query: event.target.value })
    }

    render() {
        const { query } = this.state;

        return (
            <>
                <div className="d-flex justify-content-end mb-2">
                    <CForm className="w-50">
                        <CInputGroup>
                            <CFormControl
                                type="text"
                                id="floatingInput"
                                placeholder="Search"
                                className="p-2"
                                value={query}
                                onChange={this.handleSearch}
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
                <Wishlist
                    key={query}
                    query={query}
                />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {
})(WishlistController)
