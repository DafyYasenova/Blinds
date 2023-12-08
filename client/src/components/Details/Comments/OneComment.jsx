import styles from '../Details.module.css';

export const OneComment = ({
    username,
    comment,

}) => {

    return (
        <>
            <li>
                <p>
                    <img src="/Images/user-comment-icon.png"
                        className={styles['user-icon']}></img>
                    {username}: {comment}
                </p>
            </li>
        </>
    )
}