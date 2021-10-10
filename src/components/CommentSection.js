import React, { useEffect, useState } from 'react'
import styles from './../scss/comment.scss'
import DisplayComments from './comment/DisplayComments'
import { ActionProvider } from './comment/ActionContext'
import SignField from './comment/SignField'
import Input from './comment/Input'

export const CommentSection = ({
    commentsArray,
    currentUser,
    setComment,
    signinUrl,
    signupUrl,
    customInput,
    disableReplyButton
}) => {
    const [comments, setComments] = useState(commentsArray)
    useEffect(() => {
        setComments(commentsArray)
    }, [commentsArray])

    return (
        <ActionProvider
            currentUser={currentUser}
            setComment={setComment}
            comments={comments}
            signinUrl={signinUrl}
            signupUrl={signupUrl}
            customInput={customInput}
            disableReplyButton={disableReplyButton}
        >
            <div className="section">
                <div className="inputBox">
                    {signupUrl && !currentUser ? <SignField /> : <Input />}
                </div>
                <div className="displayComments">
                    <DisplayComments comments={comments} />
                </div>
            </div>
        </ActionProvider>
    )
}
