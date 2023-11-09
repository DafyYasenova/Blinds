import styles from './Catalog.module.css';
import { useState, useEffect} from 'react';
import * as blindService from '../../services/blindService';


export default function Catalog(){
    const [blinds, setBlinds] = useState([]);
    useEffect(() => {
        blindService.getAll()
        .then(result => {
            console.log(result)
            setBlinds(result);
        });
    }, []);
    
    return(
        <section className={styles.catalog}>
            <h2>CATALOG</h2>
            <ul>
                <li>
                    <img src="/Images/harmoniyaa.jpg" alt="{{image}}" />
                        <h3>Harmoniya</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </li>
                <li>
                    <img src="/Images/vertikalni-shtori.jpg" alt="{{image}}" />
                    
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </li>
                <li>
                    <img src="/Images/perde-shtora.jpg" alt="{{image}}" />
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                       
                    </li>
                    <li>
                    <img src="/Images/harmoniyaa.jpg" alt="{{image}}" />
                        <h3>Harmoniya</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </li>
                <li>
                    <img src="/Images/vertikalni-shtori.jpg" alt="{{image}}" />
                    
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                    </li>
                <li>
                    <img src="/Images/perde-shtora.jpg" alt="{{image}}" />
                        <h3>Vertical</h3>
                        <a className={styles["details-btn"]} href="">Details</a>
                       
                    </li>
                

            </ul>
        </section>
    )
}