import styles from './Catalog.module.css';
import { useState, useEffect } from 'react';
import * as blindService from '../../services/blindService';
import CatalogItem from './CatalogItem/CatalogItem';


export default function Catalog() {

    const [blinds, setBlinds] = useState([]);
    useEffect(() => {
    
        blindService.getAll()
            .then(result => {
              
                setBlinds(result);
            })
            .catch(error => {
                console.log(error)
            })
          
    }, []);

    return (
        <section className={styles.catalog}>
            <h2>CATALOG</h2>
         
            <ul>
                {blinds.map(blind => <CatalogItem key={blind._id} {...blind}/>)}
        
            </ul>
            {blinds.length === 0 && <h3>No blinds yet!</h3>}
            
        </section>
    )
}