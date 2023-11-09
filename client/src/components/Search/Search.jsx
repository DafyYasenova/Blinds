import styles from './Search.module.css';

export default function Search() {
    return (
        <section className={styles.search}>
            <section className={styles["search-form"]}>
                <h2>Search</h2>

                <form className="search">
                
                    <input type="text" name="search" placeholder="Search here..." />
                    <button type="submit">SEARCH</button>
                </form>

                <h2>Results:</h2>
               

                <div id="search-container">
                    <ul className={styles["blind-wrapper"]}>

                        <li className={styles.blind}>
                             <img src="/Images/vertikalni-shtori.jpg" height="200px" alt="shtora" /> 

                            <p>
                                <strong>Model: </strong><span className="model">Blinds</span>
                            </p>

                            <a className={styles["details-btn"]} href="">Details</a>
                        </li>
                        <li className={styles.blind}>
                             <img src="/Images/vertikalni-shtori.jpg" height="200px" alt="shtora" /> 

                            <p>
                                <strong>Model: </strong><span className="model">Blinds</span>
                            </p>

                            <a className={styles["details-btn"]} href="">Details</a>
                        </li>
                        <li className={styles.blind}>
                             <img src="/Images/vertikalni-shtori.jpg" height="200px" alt="shtora" /> 

                            <p>
                                <strong>Model: </strong><span className="model">Blinds</span>
                            </p>

                            <a className={styles["details-btn"]} href="">Details</a>
                        </li>
                    </ul>

                </div>
                </section>
                    {/* <h2>There are no results found.</h2> */}
        </section>
    )
}