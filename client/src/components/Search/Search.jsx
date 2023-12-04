import styles from './Search.module.css';
import * as blindService from '../../services/blindService';
import { useEffect, useState } from 'react';

import BlindCard from './BlindCard/BlindCard';

export default function Search() {


    const [latestBlinds, setLatestBlinds] = useState([]);
    const [blinds, setBlinds] = useState([]);
    const [searchParam, setSearchParam] = useState({
        name: '',
    })

    useEffect(() => {
        blindService.getLatestBlinds()
            .then(result => setLatestBlinds(result))

    }, []);

    const onChange = (e) => {

        let { name, value, type } = e.target;
        setSearchParam(state => ({ ...state, [name]: type === 'number' ? Number(value) : value }));

    }

    const onSubmit = (e) => {

        e.preventDefault();
        onSearch();
    }

    const onSearch = () => {
        if (!searchParam.name || searchParam.name === '') {
            return;
        }

        let query;
        if (searchParam.name && searchParam.name !== '') {

            query = searchParam.name;
        }

        blindService.search(query)
            .then(result => {

                setBlinds(result);
                setLatestBlinds([]);
            });

    }

    return (
        <section className={styles.search}>

            <section className={styles["search-form"]}>
                <form className="search" onSubmit={onSubmit}>
                    <input type="text" name="name" value={searchParam.name} onChange={onChange} placeholder="Search by name" />
                    <div>
                        <button type="submit">SEARCH</button>
                    </div>
                </form>
            </section>

            {latestBlinds.length > 0 ?
                <div >
                    <h2>Latest blinds</h2>

                    <div id="search-container">
                        <ul className={styles["blind-wrapper"]}>
                            {latestBlinds.map(blind => <BlindCard key={blind._id} {...blind} />)}
                            {!latestBlinds.length && <h2>No blinds yet...</h2>}
                        </ul>
                    </div>
                </div>
                :
                <div className={styles["search-result"]}>
                    <h2>Results:</h2>

                    <div id="search-container">
                        <ul className={styles["blind-wrapper"]}>
                            {blinds.map(blind => <BlindCard key={blind._id} {...blind} />)}
                            {!blinds.length && <h2>There are no results found.</h2>}
                        </ul>
                    </div>

                </div>
            }
        </section>
    )
}