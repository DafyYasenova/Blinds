import styles from './Search.module.css';
import * as blindService from '../../services/blindService';
import { useEffect, useState } from 'react';
import LatestBlind from './LatestBlind/LatestBlind';


export default function Search() {

    const [latestBlinds, setLatestBlinds] = useState([]);

    useEffect(() => {
        blindService.getLatestBlinds()
            .then(result => setLatestBlinds(result))
    }, [])
    return (
        <section className={styles.search}>

            <section className={styles["search-form"]}>
                <form className="search">
                    <input type="text" name="search" placeholder="Search here..." />
                    <div className={styles.category}>
                        <select placeholder="Category" name="category" >
                            <option value="Vertical blinds">Vertical Blinds</option>
                            <option value="Harmony Blinds">Harmony</option>
                            <option value="Day and nigth Blinds">Day and night</option>
                            <option value="Aluminium horizontal blinds">Aluminium horizontal blinds</option>
                            <option value="Photo blinds">Photo blinds</option>
                        </select>
                    </div>
                    <input type="number" name="price" id="price" placeholder="Price for sq.m" />
                </form>
                <button type="submit">SEARCH</button>
            </section>

            <div >
                <h2>Latest blinds</h2>

                <div id="search-container">
                    <ul className={styles["blind-wrapper"]}>

                        {latestBlinds.map(blind => <LatestBlind key={blind._id} {...blind} />)}
                        {!latestBlinds.length && <h2>No blinds yet...</h2>}
                    </ul>

                </div>
            </div>
            <div className={styles["search-result"]}>
                <h2>Results:</h2>

                <div id="search-container">
                    <ul className={styles["blind-wrapper"]}>

                       
                    </ul>
                </div>
            </div>
            <h2>There are no results found.</h2>
        </section>
    )
}