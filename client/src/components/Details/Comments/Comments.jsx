import React, { useState } from 'react';
import styles from './Comments.module.css';
// import styles from '../../Details/Details.module.css';
export default  function Comments  ({ addComment, comments, isCommentAreaDisabled, }) {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const onUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onCommentChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className={styles["comment-area"]} >
      <form onSubmit={(e) => addComment(e, username, comment)}>
        {/* <input hidden={isCommentAreaDisabled} type="text" value={username} onChange={onUsernameChange} name="username" placeholder="username" /> */}
        <textarea
          hidden={isCommentAreaDisabled}
          id="comment-area"
          value={comment}
          onChange={onCommentChange}
          name="comment"
          placeholder="Your comment"
          rows="3"
          cols="40"
        ></textarea>

        <button hidden={isCommentAreaDisabled} type="submit">Add comment</button>
      </form>
    </div>
  );
};

