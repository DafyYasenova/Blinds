import styles from './Search.module.css';
import * as blindService from '../../services/blindService';
import { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";

import BlindCard from './BlindCard/BlindCard';

export default function Search() {
// const history = useHistory();
    const [latestBlinds, setLatestBlinds] = useState([]);
    const [blinds, setBlinds] = useState([]);
    const [searchParam, setSearchParam] = useState({
        name: '',
        category: '',
        price: '',
    })

    useEffect(() => {
        blindService.getLatestBlinds()
            .then(result => setLatestBlinds(result))

    }, []);

    const onChange = (e) => {

        let { name, value, type } = e.target;
        setSearchParam(state => ({ ...state, [name]: type === 'number' ? Number(value) : value }));
        console.log('value', e.target.value)
    }

    const onSubmit = (e) => {

        e.preventDefault();
        console.log('submit')
        // let search = '';

        // if (searchParam.name) {
        //     search = `?name=${searchParam.name}`;
        // }

        // if (searchParam.category) {
        //     search += (search ? "&" : "?") + `category=${searchParam.category}`;
        // }

        // if (searchParam.price) {
        //     search += (search ? "&" : "?") + `price=${searchParam.price}`;
        // }

        // console.log(search)
        // history.push(`/search${search}`)

        onSearch();
        // console.log('search', searchParam)
    }

    const onSearch = () => {
        if (!searchParam.name) {
            return;
        }
        blindService.search(searchParam.name)
            .then(result => {
                // console.log(result)
                setBlinds(result);
                setLatestBlinds([]);
            })

    }

    // console.log(blinds);

    return (
        <section className={styles.search}>

            <section className={styles["search-form"]}>
                <form className="search" onSubmit={onSubmit}>
                    <input type="text" name="name" value={searchParam.name} onChange={onChange} placeholder="Search by name" />
                    <div className={styles.category}>
                        <select placeholder="Category" name="category" value={searchParam.category} onChange={onChange}>
                            <option value="Vertical blinds">Vertical Blinds</option>
                            <option value="Harmony Blinds">Harmony</option>
                            <option value="Day and nigth Blinds">Day and night</option>
                            <option value="Aluminium horizontal blinds">Aluminium horizontal blinds</option>
                            <option value="Photo blinds">Photo blinds</option>
                        </select>
                    </div>
                    <input type="number" name="price" value={searchParam.price} onChange={onChange} id="price" placeholder="Price for sq.m" />
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