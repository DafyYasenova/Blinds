import React from 'react';
import styles from './Delete.module.css';

const Delete = ({ onDelete, onClose, blindName }) => {
	return (
		<div className={styles["overlay"]}>
			<div className={styles["backdrop"]} onClick={onClose}></div>
			<div className={styles["modal"]}>
				<h2>Are you sure you want to delete
					<h1>{blindName}?</h1></h2>
				<p><img src="/Images/delete.png" height={"100px"} ></img></p>
				<div className={styles["btn"]}>
					<button type="submit" onClick={onDelete}>Delete</button>
					<button type="button" onClick={onClose}>Cancel</button>
				</div>
			</div>
		</div>

	);
};

export default Delete;