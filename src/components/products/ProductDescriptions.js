import React, { Component } from 'react'
import { EditorState, convertFromRaw } from "draft-js";
import DOMPurify from 'dompurify';
import { convertToHTML } from 'draft-convert';
export class ProductDescriptions extends Component {

    state = {
        description: this.props.productDescription
    }
    createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        };
    };
    render() {
        let { description } = this.state;
        // console.log(description);
        let content = description && JSON.parse(description);
        let convertFromRawContent = convertFromRaw(content);
        const editorState = EditorState.createWithContent(convertFromRawContent);
        const html = convertToHTML(editorState.getCurrentContent());
        console.log(editorState);
        return (
            <>
                <div
                    className="preview ps-4"
                    dangerouslySetInnerHTML={this.createMarkup(html)}
                ></div>
            </>
        )
    }
}

export default ProductDescriptions
