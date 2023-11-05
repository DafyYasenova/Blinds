export default function Search() {
    return (
        <section className="search">
            <section className="search-form">
                <h2>Search</h2>

                <form className="search">
                    {/* <img src="/Images/feya.jpg" height="300px" alt="feya" /> */}
                    <input type="text" name="search" placeholder="Search here..." />
                    <button type="submit">SEARCH</button>
                </form>


                <h3>Results:</h3>

                <div id="search-container">
                    <ul className="blind-wrapper">

                    <h2>There are no results found.</h2>
                        <li className="blind">
                            {/* <img src="/Images/shtora.jpg" height="200px" alt="shtora" /> */}

                            <p>
                                <strong>Model: </strong><span className="model">Blinds</span>
                            </p>

                            <a className="details-btn" href="">Details</a>
                        </li>
                    </ul>

                </div>
            </section>
        </section>
    )
}