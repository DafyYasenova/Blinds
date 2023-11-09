import styles from './Catalog.module.css';

export default function CatalogItem({
    name,
    imageUrl


}) {
    return (
        <li>
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <a className={styles["details-btn"]} href="">Details</a>
        </li>

    )
}