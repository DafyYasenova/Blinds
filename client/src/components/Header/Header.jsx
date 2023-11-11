import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div>
        <header>
        <section className="navigation">
            <p><img src="/Images/blinds-logo.png" height="38px"/> <Link to="/"><span>BLINDS</span></Link></p>
            <nav>
                <ul>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/catalog">CATALOG</Link></li>
                    <li><Link to="/create">CREATE</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                    <li><Link to="/logout">LOGOUT</Link></li>
                    <li><Link to="/search">SEARCH</Link></li>

                </ul>
            </nav>
        </section>
    </header>
    </div>
    )
}