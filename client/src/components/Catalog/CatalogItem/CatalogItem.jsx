import styles from './../Catalog.module.css';
import { Link } from 'react-router-dom'

export default function CatalogItem({
    _id,
    name,
    imageUrl, 

}) {
    return (
        <li>
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <Link to={`/details/${_id}`} className={styles["details-btn"]}>Details</Link>
          
        </li>

    )
}