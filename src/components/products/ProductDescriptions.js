import React, { Component } from "react"
import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
import DOMPurify from "dompurify"
import draftToHtml from "draftjs-to-html"
export class ProductDescriptions extends Component {
  state = {
    description: this.props.productDescription,
  }
  createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    }
  }
  render() {
    let { description } = this.state
    let content = description && JSON.parse(description)
    if (content) {
      let convertFromRawContent = convertFromRaw(content)
      const editorState = EditorState.createWithContent(convertFromRawContent)
      const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
      return (
        <>
          <div
            className="preview ps-4"
            dangerouslySetInnerHTML={this.createMarkup(html)}
          ></div>
        </>
      )
    } else {
      return (
        <>
          <div className="preview ps-4"></div>
        </>
      )
    }
  }
}

export default ProductDescriptions
