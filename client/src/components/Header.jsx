export default function Header(){
    return(
        <div>
        <header>
        <section className="navigation">
            <p><a href="/"><img src="./Images/blinds.png" height="38px"/> <span>BLINDS</span></a></p>
            <nav>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/create">Create</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/search">Search</a></li>

                </ul>
            </nav>
        </section>
    </header>
    </div>
    )
}