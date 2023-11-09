import styles from './Catalog.module.css';

export default function Catalog(){
    return(
        <section className={styles.catalog}>
            <h2>CATALOG</h2>
            <ul>
                <li><a href="#">
                    <img src="/Images/harmoniyaa.jpg" alt="{{image}}" />
                        <h3>Harmoniya</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </a></li>
                <li><a href="#">
                    <img src="/Images/vertikalni-shtori.jpg" alt="{{image}}" />
                    
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </a></li>
                <li><a href="#">
                    <img src="/Images/perde-shtora.jpg" alt="{{image}}" />
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                       
                    </a></li>
                    <li><a href="#">
                    <img src="/Images/harmoniyaa.jpg" alt="{{image}}" />
                        <h3>Harmoniya</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </a></li>
                <li><a href="#">
                    <img src="/Images/vertikalni-shtori.jpg" alt="{{image}}" />
                    
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </a></li>
                <li><a href="#">
                    <img src="/Images/perde-shtora.jpg" alt="{{image}}" />
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                       
                    </a></li>
                

            </ul>
        </section>
    )
}