export default function Header(){
    return(
        <div>
        <header>
        <section className="navigation">
            <p><a href="/"><img src="./Images/blinds.png" height="38px"/> <span>BLINDS</span></a></p>
            <nav>
                <ul>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/catalog">CATALOG</a></li>
                    <li><a href="/create">CREATE</a></li>
                    <li><a href="/users/login">LOGIN</a></li>
                    <li><a href="/users/register">REGISTER</a></li>
                    <li><a href="/users/logout">LOGOUT</a></li>
                    <li><a href="/search">SEARCH</a></li>

                </ul>
            </nav>
        </section>
    </header>
    </div>
    )
}