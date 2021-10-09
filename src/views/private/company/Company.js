import React, { Component } from 'react'
import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CTableCaption,
    CButton,
} from '@coreui/react'
import { withRouter } from 'react-router'
//icons
import * as MdIcons from 'react-icons/md'
import * as FaIcons from "react-icons/fa"
//redux
import { connect } from 'react-redux'
//action
import { setAlertModal, addBranchModal } from 'src/service/apiActions/modalAction/modalAction'
import { clearMessage, } from 'src/service/apiActions/messageAction/messageAction'
import { getBranchesWithTotalProduct } from 'src/service/apiActions/branchAction/branchAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
//modal alert
import AlertModal from 'src/components/modals/alert/AlertModal'

//add branch modal
import BranchModal from 'src/components/modals/branch/BranchModal'
import Roles from 'src/router/config'


export class Company extends Component {
    state = {
        visible: false,
        branches: [],
        message: '',
        token: '',
        permission: ''

    }
    componentDidMount() {
        let { type, accessToken, roles } = this.props.credentials;
        let token = type + accessToken;

        this.setState({
            permission: roles && roles.roleName
        })
        this.props.getBranchesWithTotalProduct(token)
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageGetBranchWithTotalProduct(prevProps, prevState);
        this.manageCredentials(prevProps, prevState);
    }
    manageGetBranchWithTotalProduct = (prevProps, prevState) => {
        if (prevProps.branchResponse !== this.props.branchResponse) {
            let { status, action, data } = this.props.branchResponse;
            if (status === 200 && action === "GETBRANCHPRODUCT") {
                this.setState({
                    branches: data.branches
                })
            }
        }
    }
    manageCredentials = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { accessToken, type, roles } = this.props.credentials;
            let token = type + accessToken;
            this.setState({
                token: token,
                permission: roles && roles.roleName
            })
        }
    }
    renderAlertModal() {
        return (
            < AlertModal />
        )
    }
    renderBranchModal() {
        return (
            <BranchModal />
        )
    }
    render() {
        let { visible, branches, message, permission } = this.state;

        let rowBranches = branches.length > 0 && branches.map((branch, index) => {
            return (
                <CTableRow className="text-center" key={index}>
                    <CTableDataCell>{branch.branch}</CTableDataCell>
                    <CTableDataCell>{branch.totalProduct}</CTableDataCell>
                    <CTableDataCell className="text-center w-25" colSpan="1">
                        <CButton
                            color="info"
                            className="me-2"
                            variant="ghost"
                            size="sm"
                            onClick={() => this.props.addBranchModal(!visible, 'Edit', branch, <MdIcons.MdModeEdit size="20" className="me-2" />)}
                        >
                            <MdIcons.MdModeEdit size="20" />
                        </CButton>
                        {permission === Roles.SUPER_ADMIN ?
                            <CButton
                                color="danger"
                                className="ms-2"
                                variant="ghost"
                                onClick={() => this.props.setAlertModal(!visible, "DELETEBRANCH", "BRANCH", branch.id)}
                                size="sm" >
                                <MdIcons.MdDelete size="20" />
                            </CButton> :
                            <></>
                        }
                    </CTableDataCell>
                </CTableRow>
            )
        })
        return (
            <  >
                {this.renderAlertModal()}
                {this.renderBranchModal()}

                <CButton
                    shape="rounded-pill"
                    color="primary"
                    variant="ghost"
                    className="d-flex justify-content-center align-items-center mb-3"
                    onClick={() => this.props.addBranchModal(!visible, 'Add', '', <FaIcons.FaPlus size={20} className="me-2" />)}
                >

                    <FaIcons.FaPlus size={20} />
                    <span style={{ marginLeft: "10px" }}>
                        Add Branch
                    </span>
                </CButton>

                <CTable
                    striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle" >
                    <CTableCaption>List of Branch: <b>{branches.length}</b></CTableCaption>
                    <CTableHead color="dark">

                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">Branch Location</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Total Products</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody color="light">

                        {
                            branches.length > 0 ? <>
                                {rowBranches}
                            </> :
                                <CTableRow>
                                    <CTableDataCell colSpan="4">No data</CTableDataCell>
                                </CTableRow>
                        }
                        {message && (
                            <CTableRow className="text-center">
                                <CTableDataCell colSpan="4">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </CTableDataCell>
                            </CTableRow>
                        )}
                    </CTableBody>
                </CTable>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse,
        credentials: state.userResponse.credentials,
        branchResponse: state.branchResponse,
        messageResponse: state.messageResponse
    }
}
export default withRouter(connect(mapStateToProps, {
    setAlertModal,
    addBranchModal,
    getBranchesWithTotalProduct,
    logout,
    clearMessage
})(Company))
