import React from 'react';
import styles from './Delete.module.css';

const DeleteModal = ({ onDelete, onClose }) => {
	return (
		<div className={styles["overlay"]}>
			<div className={styles["backdrop"]} onClick={onClose}></div>
			<div className={styles["modal"]}>

				<h2>Are you sure you want to delete this post?</h2>
				<div className={styles["btn"]}>
					<button type="submit" onClick={onDelete}>Delete</button>
					<button type="button" onClick={onClose}>Cancel</button>
				</div>
			</div>
		</div>

	);
};

export default DeleteModal;