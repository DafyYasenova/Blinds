import styles from '../../Search/Search.module.css';
import { Link } from 'react-router-dom'

export default function BlindCard({
    _id,
    name,
    imageUrl, 
}) {

    return (
        <li className={styles.blind}>
            <img src={imageUrl} height="200px" alt={name} />

            <p>
                <span >{name}</span>
            </p>
            <Link to={`/details/${_id}`} className={styles["details-btn"]}>Details</Link>

        </li>

    )
}