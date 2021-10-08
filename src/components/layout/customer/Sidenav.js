import React, { Component } from 'react'
import {
    CAvatar,
    CNav,
    CNavItem
} from '@coreui/react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

//icon
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from "react-icons/vsc";
import * as IoIcons from 'react-icons/io5'
import * as BiIcons from "react-icons/bi"


export class Sidenav extends Component {

    state = {
        username: '',
        isLoggedIn: false,
    }
    componentDidMount() {
        let { credentials, isLoggedIn } = this.props.userResponse;

        this.setState({
            username: credentials.username,
            isLoggedIn: isLoggedIn
        })
    }
    // componentDidUpdate(prevProps, prevState) {
    //     this.manageUserResponse(prevProps, prevState);
    // }
    // manageUserResponse = (prevProps, prevState) => {
    //     console.log("take")
    //     if (prevProps.userResponse !== this.props.userResponse) {
    //         let { credentials } = this.props.userResponse;
    //         console.log(this.props.userResponse);
    //         this.setState({
    //             username: ''
    //         })
    //     }
    // }
    render() {
        let { username } = this.state;
        return (
            <>
                <div className=" w-25 d-none d-lg-block pt-4 " >
                    <div className="d-flex">
                        <CAvatar color="secondary" src="/avatars/1.jpg" size="xl" />
                        <div className="ms-3">
                            <h5>{username}</h5>
                            <div className="font-style text-black-50 border d-flex align-items-center" style={{}}>

                                <Link className=" text-black-50" style={{ textDecoration: "none" }}>
                                    <FaIcons.FaUserEdit size={16} />
                                    <span className="ms-1">Edit Profile</span>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 side-nav-items">
                        <ul className="side-nav-wrapper">
                            <li className="mb-2 side-nav-list">
                                <Link to="/user/profile" className="side-nav-item d-flex align-items-center">
                                    <VscIcons.VscAccount size={20} />
                                    <span className="ms-2">My Profile</span>
                                </Link>
                            </li>
                            <li className="side-nav-list mb-2">

                                <Link to="/user/order" className="side-nav-item d-flex align-items-center">
                                    <IoIcons.IoBagCheck size={20} />
                                    <span className="ms-2">My Order</span>
                                </Link>
                            </li>
                            <li className="side-nav-list mb-2">

                                <Link to="/user/wishlist" className="side-nav-item d-flex align-items-center">
                                    <BiIcons.BiHistory size={20} />
                                    <span className="ms-2">Wishlist</span>
                                </Link>
                            </li>
                        </ul>
                        {/* <CNav className="flex-column">
                            <CNavItem active>
                                <Link to="/user/profile" className="side-nav-item d-flex align-items-center">
                                    <VscIcons.VscAccount size={20} />
                                    <span className="ms-2">My Profile</span>
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <Link to="/user/order" className="side-nav-item d-flex align-items-center">
                                    <IoIcons.IoBagCheck size={20} />
                                    <span className="ms-2">My Order</span>
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <Link to="/user/order" className="side-nav-item d-flex align-items-center">
                                    <BiIcons.BiHistory size={20} />
                                    <span className="ms-2">My History</span>
                                </Link>
                            </CNavItem>
                        </CNav> */}
                    </div>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        userResponse: state.userResponse
    }
}
export default connect(mapStateToProps, {})(Sidenav)
