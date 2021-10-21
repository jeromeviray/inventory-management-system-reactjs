import {
    CCard,
    CCardBody,
    CCardHeader,
    CButton,
    CCardText,
    CCardTitle,
} from "@coreui/react"
import React, { Component } from "react"
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"

import { connect } from "react-redux"
import { getTermsAndCondition } from "src/service/apiActions/termsAction/TermsAndConditionAction"
import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
import DOMPurify from "dompurify"
import draftToHtml from "draftjs-to-html"
import TermsAndCondtionModal from "src/components/modals/termsAndCondition/TermsAndCondtionModal"
import { setTermAndConditionModal } from "src/service/apiActions/modalAction/modalAction"
export class TermsAndCondition extends Component {
    state = {
        termsAndCondition: [],
        visible: false,
    }
    componentDidMount() {
        this.props.getTermsAndCondition()
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageTermsAndConditionResponse(prevProps, prevState)
        this.manageStoreInfo(prevProps, prevState)
    }
    manageTermsAndConditionResponse = (prevProps, prevState) => {
        if (
            prevProps.termsAndConditionResponse !==
            this.props.termsAndConditionResponse
        ) {
            const { action, status, data } = this.props.termsAndConditionResponse
            if (action === "GET_TERMS_AND_CONDITION" && status === 200) {
                this.setState({
                    termsAndCondition: data,
                })
            }
        }
    }
    manageStoreInfo = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { action } = this.props.modalVisible
            if (action === "close") {
                this.props.getTermsAndCondition()
            }
        }
    }
    createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html),
        }
    }
    render() {
        const { termsAndCondition, visible } = this.state
        const { content } = termsAndCondition
        let convertFromRawContent = ""
        let html = <></>
        if (content) {
            let getContent = termsAndCondition && JSON.parse(content)
            if (getContent) {
                convertFromRawContent = convertFromRaw(getContent)
                const editorState = EditorState.createWithContent(convertFromRawContent)
                html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
            }
        }
        const margin = {
            marginBottom: "12px",
            marginLeft: "5px",
        }
        return (
            <>
                <TermsAndCondtionModal />
                <CCard>
                    <CCardHeader className="d-flex justify-content-between align-items-center">
                        <CCardTitle>Terms And Condition</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        {termsAndCondition ? (
                            <>
                                <div className="text-black-50 d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="m-0 pe-3 mb-2">
                                        Created Date:
                                        <strong style={{ ...margin }}>
                                            {termsAndCondition.createdAt}
                                        </strong>
                                    </h6>
                                    <h6 className="m-0 pe-3 mb-2">
                                        Last Updated Date:
                                        <strong style={{ ...margin }}>
                                            {termsAndCondition.updatedAt}
                                        </strong>
                                    </h6>
                                </div>
                                <hr />

                                <CCardText className="p-3 d-flex justify-content-center">
                                    <div
                                        className="preview ps-4 pe-4"
                                        dangerouslySetInnerHTML={this.createMarkup(html)}
                                    ></div>
                                </CCardText>
                            </>
                        ) : (
                            <>
                                <div className="preview ps-4 pe-4 text-warning" style={{ textAlign: "justify", textJustify: 'inter-word' }}>
                                    <p >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lectus et justo maximus pretium. Sed venenatis magna nec consectetur cursus. Vestibulum ac enim massa. Sed sagittis tincidunt orci, vel congue enim. In tristique suscipit commodo. Sed bibendum aliquam nisl, sed viverra dui mollis ac. Nullam non ante eu libero eleifend viverra. Sed eget magna rutrum, egestas sapien imperdiet, rutrum enim. Aliquam neque metus, ultrices ut malesuada at, venenatis sit amet ipsum. Cras id molestie sem. Aliquam aliquam at tellus eget egestas. Suspendisse vestibulum magna metus, non fermentum ante aliquet euismod.

                                        Mauris vel semper erat. Aenean finibus lobortis dolor. Proin venenatis, metus et mattis elementum, dui velit tincidunt justo, in dignissim purus nibh at orci. Mauris ac cursus nulla. Vestibulum ultrices eros sit amet magna vestibulum, et pellentesque metus feugiat. Sed quis congue nulla. Maecenas ante ex, varius in auctor gravida, convallis ac ante. Vivamus purus nisl, fringilla laoreet volutpat lacinia, fringilla eu felis. Nam eu diam auctor, iaculis diam eget, accumsan sapien. Mauris consectetur dictum eleifend. Cras sit amet tristique leo, non interdum ex. Mauris malesuada dignissim urna quis bibendum. Integer pretium pretium lorem nec condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    </p>
                                    <p>
                                        Maecenas ullamcorper mi a urna eleifend pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sapien ex, sagittis sed lacinia eget, tristique commodo tellus. Nullam efficitur lacinia justo, id venenatis ipsum suscipit eget. Etiam id cursus turpis, eget laoreet tellus. Vestibulum at pulvinar nisi, vel rhoncus augue. Nulla id diam enim. Nulla varius ipsum eu est volutpat sollicitudin in ac diam.

                                        Pellentesque hendrerit eros eget nisi suscipit, et semper tortor suscipit. Sed finibus at nibh ac porta. Nulla facilisi. Aliquam risus velit, porta nec neque in, lobortis bibendum lacus. Duis maximus, nunc eget interdum gravida, justo urna tincidunt ligula, ut blandit dolor neque quis leo. Sed at elit sed nulla lacinia faucibus. Maecenas quis odio eget leo iaculis semper. Cras fringilla est non dictum viverra. Aliquam mauris nulla, bibendum nec nisl eget, gravida condimentum purus.

                                        Praesent sed hendrerit lorem. Pellentesque ullamcorper quis lectus sed blandit. Integer tellus lectus, maximus vitae volutpat a, pharetra at orci. Pellentesque vitae odio quis lectus congue lacinia id nec nulla. Phasellus sit amet mauris vel urna faucibus iaculis in in arcu. Pellentesque et magna sapien. Suspendisse faucibus dolor sed dolor dapibus vulputate.
                                    </p>
                                </div>
                            </>
                        )}
                    </CCardBody>
                </CCard>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse,
        messageResponse: state.messageResponse,
        termsAndConditionResponse: state.termsAndConditionResponse,
    }
}
export default connect(mapStateToProps, {
    getTermsAndCondition,
    setTermAndConditionModal,
})(TermsAndCondition)
