import React, { useContext, useState } from 'react';
import styles from './Comments.module.css';
import AuthContext from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';

export default function Comments({ addComment, comments, isCommentAreaDisabled, }) {

  const { username } = useContext(AuthContext);

  const { onSubmit, onChange, values } = useForm({
    comment: "",
     username,
  }, addComment);

  return (
    <div className={styles["comment-area"]} >
      <form onSubmit={onSubmit}>

        <textarea
          hidden={isCommentAreaDisabled}
          id="comment-area"
          onChange={onChange}
          name="comment"
          value={values.comment}

          placeholder="Your comment"
          rows="3"
          cols="40"
        ></textarea>

        <button hidden={isCommentAreaDisabled} type="submit">Add comment</button>
      </form>
    </div>
  );
};

