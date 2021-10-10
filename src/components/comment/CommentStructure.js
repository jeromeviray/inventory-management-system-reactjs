import React, { useContext } from 'react'
import styles from '../../scss/comment.scss'
import Popup from 'reactjs-popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import {
  modal,
  modalClose,
  modalHeader,
  modalContent,
  modalActions,
  modalActionBtn,
  modalDelBtn
} from './ModalStyles'
import { ActionContext } from './ActionContext'

const CommentStructure = ({ i, reply, parentId }) => {
  const actions = useContext(ActionContext)
  const edit = true
  const date = i.createdAt.getFullYear() + "-" + (i.createdAt.getMonth() + 1) + "-" + i.createdAt.getDate() + " " + i.createdAt.getHours() + ":" + i.createdAt.getMinutes() + ":" + i.createdAt.getSeconds();
  return (
    <div className="halfDiv">
      <div
        className="userInfo"
        style={reply && { marginLeft: 15, marginTop: '6px' }}
      >
        <div className="commentsTwo">
          <div>
            <img
              src={i.avatarUrl}
              style={{ width: 40, height: 40, borderRadius: ".25rem" }}
              alt='userIcon'
            />
          </div>
          <div className="fullName"><strong>{i.fullName}</strong>&nbsp; <small>{date}</small></div>
        </div>
        <div style={{ paddingLeft: 50 }}>{i.text}</div>
        {!actions.disableReplyButton &&
          <div style={{ paddingLeft: 45 }}>
            <button
              className="replyBtn"
              onClick={() => actions.handleAction(i.comId)}
              disabled={!actions.user}
            >
              {' '}
              <FontAwesomeIcon icon={faReply} size='1x' color='#a5a5a5' /> Reply
            </button>
          </div>
        }
        <hr></hr>
      </div>
      <div className="userActions">
        {actions.userId === i.userId && actions.user && (
          <Popup
            role='tooltip'
            trigger={
              <button className="actionsBtn">
                <FontAwesomeIcon icon={faEllipsisV} size='1x' color='#b9b9b9' />
              </button>
            }
            position='right center'
            nested
          >
            <div className="actionDiv">
              <div>
                <button
                  className="editBtn"
                  onClick={() => actions.handleAction(i.comId, edit)}
                >
                  {' '}
                  edit
                </button>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="deleteBtn"> delete</button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className='modal' style={modal}>
                      <button
                        className='close'
                        onClick={close}
                        style={modalClose}
                      >
                        &times;
                      </button>
                      <div className='header' style={modalHeader}>
                        {' '}
                        Delete Comment{' '}
                      </div>
                      <div className='content' style={modalContent}>
                        {' '}
                        Delete your comment permanently?
                      </div>
                      <div className='actions' style={modalActions}>
                        <button
                          className='button'
                          style={modalActionBtn}
                          onClick={() => {
                            actions.onDelete(i.comId, parentId)
                            close()
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className='button'
                          style={modalDelBtn}
                          onClick={() => {
                            close()
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </Popup>
        )}
      </div>
    </div >
  )
}

export default CommentStructure
