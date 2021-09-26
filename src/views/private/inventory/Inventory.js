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
    CBadge,
    CNavItem
} from '@coreui/react'
import { connect } from 'react-redux'
//action
import { getInventory } from 'src/service/apiActions/inventoryAction/inventoryAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
// barcode
import Barcode from "react-barcode"
import ReactPaginate from 'react-paginate';

export class Inventory extends Component {
    state = {
        message: '',
        inventory: [],
        page: 0,
        limit: 10,
        query: ""
    }
    componentDidMount() {
        const { page, limit, query } = this.state;
        this.props.getInventory(query, page, limit).catch(() => {
            let { status, data } = this.props.messageResponse;
            if (status > 400 && status <= 403) {
                setInterval(() => {
                    this.props.logout();
                    this.props.clearMessage();
                }, 1000);
            }
            this.setState({
                message: data.message
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageInventoryResponse(prevProps, prevState);
    }
    manageInventoryResponse = (prevPros, prevState) => {
        if (prevPros.inventoryResponse !== this.props.inventoryResponse) {
            let { status, action, data } = this.props.inventoryResponse;
            console.log(data);
            if (status === 200 && action === 'GETINVENTORY') {
                this.setState({
                    inventory: data.inventory.data
                })
            }
        }
    }

    manageStatus = (status) => {
        switch (status) {
            case "OK":
                return (
                    <CBadge color="success" shape="rounded-pill">{status}</CBadge>
                )
            case "LOW":
                return (
                    <CBadge color="warning" shape="rounded-pill">{status}</CBadge>
                )
            case "OUT_OF_STOCK":
                return (
                    <CBadge color="danger" shape="rounded-pill">OUT OF STOCK</CBadge>
                )
            default:
                return <CBadge color="danger" shape="rounded-pill">{status}</CBadge>
        }
    }

    handleSearch = (query) => {
        this.setState({ query: query }, () => {
            const { page, limit, query } = this.state;
            this.props.getInventory(query, page, limit);
        });
    };

    handlePageClick = (data) => {
        let page = data.selected;
        this.setState({ page: page }, () => {
            const { page, limit, query } = this.state;
            this.props.getInventory(query, page, limit);
        });
    };

    render() {
        let { inventory, message } = this.state;
        const barcodeStyle = {
            height: "50%"
        }
        return (
            <>
                <CTable
                    striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle" >
                    <CTableCaption>List of Branch: <b>{inventory.length}</b></CTableCaption>
                    <CTableHead color="dark">

                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">Product Barcode</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Threshold</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Total Stock</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody color="light">
                        {inventory.length > 0 ? inventory.map((item, index) => {
                            console.log(item)
                            return (
                                <CTableRow className="text-center" key={index}>
                                    <CTableDataCell>
                                        <Barcode
                                            value={item.barcode}
                                            height={50}
                                            width={1}
                                            fontSize={14}
                                            margin={7}
                                            background="#f5f5f548"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>{item.productName}</CTableDataCell>
                                    <CTableDataCell>{item.threshold}</CTableDataCell>
                                    <CTableDataCell>{item.totalStock}</CTableDataCell>
                                    <CTableDataCell>{this.manageStatus(item.status)}</CTableDataCell>
                                    {/* <CTableDataCell className="text-center w-25" colSpan="1">
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
                                        </CTableDataCell> */}
                                </CTableRow>
                            )
                        }) :
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
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={inventory.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inventoryResponse: state.inventoryResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    getInventory,
    logout,
    clearMessage
})(Inventory)
