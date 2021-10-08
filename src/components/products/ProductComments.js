import React, { Component } from "react"
import CommentsBlock from 'simple-react-comments';
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom";

export class ProductComments extends Component {
    state = {
        comments: [],
    }

    constructor(props) {
        super(props);
        this.state.comments = [{
            authorUrl: '#',
            avatarUrl:
                'https://cdnb.artstation.com/p/users/avatars/000/126/159/large/582fd86d44a71299b5cc51fe9f580471.jpg?1447075438',
            createdAt: new Date(1530297561680),
            fullName: 'Alexey Ryabov',
            text: 'hello whats up',
        },
        {
            authorUrl: '#',
            avatarUrl:
                'https://cdnb.artstation.com/p/users/avatars/000/126/159/large/582fd86d44a71299b5cc51fe9f580471.jpg?1447075438',
            createdAt: new Date(1530297561680),
            fullName: 'Alexey Ryabov',
            text: 'react-simple-comments is awesome!', btn: base => ({
                ...base,
                background: 'red',
            }),
            // Reset styles of textarea and use new styles
            textarea: () => ({
                border: 'none',
                '&::placeholder': {
                    color: 'blue'
                },
            }),
        }];//props.productComments;
    }
    render() {
        let { comments } = this.state
        return (
            <CommentsBlock
                comments={comments}
                signinUrl={'/login'}
                isLoggedIn={this.props.isLoggedIn}
                onSubmit={text => {
                    if (text.length > 0) {
                        this.setState({
                            comments: [
                                ...this.state.comments,
                                {
                                    authorUrl: '#',
                                    avatarUrl: '#avatarUrl',
                                    createdAt: new Date(),
                                    fullName: 'Name',
                                    text,
                                },
                            ],
                        });
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
    }
}

export default withRouter(
    connect(mapStateToProps, {
    })(ProductComments),
)
