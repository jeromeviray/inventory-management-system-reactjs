import React, { Component } from "react"
import CommentsBlock from 'simple-react-comments';
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom";
import { saveComment } from "src/service/apiActions/commentAction/commentAction"

export class ProductComments extends Component {
    state = {
        comments: [],
    }

    constructor(props) {
        super(props);
    }

    render() {
        const comments = this.props.productComments;
        return (
            <CommentsBlock
                comments={comments}
                signinUrl={'/login'}
                isLoggedIn={this.props.isLoggedIn}
                onSubmit={text => {
                    if (text.length > 0) {
                        this.props.saveComment({
                            "rating": null,
                            "message": text,
                            "anonymous": this.props.isAnonymous,
                            "published": 0,
                            "product": {
                                "id": this.props.productId
                            }
                        }).then(() => {
                            const ct = this.props.commentResponse.data;
                            console.log(ct)
                            this.props.productComments.push({
                                authorUrl: '#',
                                avatarUrl: '/avatars/8.jpg',
                                createdAt: new Date(ct.createdAt),
                                fullName: ct.name,
                                text,
                            })
                            this.setState({ comments: this.props.productComments })
                        })
                        console.log('submit:', text);
                    }
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const isLoggedIn = state.userResponse.isLoggedIn;
    return {
        isLoggedIn,
        commentResponse: state.commentResponse
    }
}

export default withRouter(
    connect(mapStateToProps, {
        saveComment
    })(ProductComments),
)
