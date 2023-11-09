import styles from './Catalog.module.css';
import { useState, useEffect } from 'react';
import * as blindService from '../../services/blindService';
import CatalogItem from './CatalogItem';

export default function Catalog() {

    const [blinds, setBlinds] = useState([]);
    useEffect(() => {
        blindService.getAll()
            .then(result => {
                console.log(result)
                setBlinds(result);
            });
    }, []);

    return (
        <section className={styles.catalog}>
            <h2>CATALOG</h2>
            <ul>
                {blinds.map(b => <CatalogItem key={b._id} {...b}/>)}
        
            </ul>
            {blinds.length === 0 && <h3>No blinds yet!</h3>}
            
        </section>
    )
}