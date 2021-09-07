import React, { Component } from 'react'
import { CContainer } from '@coreui/react'
import { Link } from 'react-router-dom'
export class SuccessOrderPlace extends Component {
    render() {
        return (
            <>
                <CContainer className="bg-light text-dark p-5 shadow-lg ">
                    <h1 className="display-4 text-success">Successfully Placed your Order</h1>
                    <div className="d-flex flex-column">
                        <span >To see your orders. <Link to="/app/order">here</Link></span>
                        <span >Go to home. <Link to="/">here</Link></span>
                    </div>

                </CContainer>
            </>
        )
    }
}

export default SuccessOrderPlace
