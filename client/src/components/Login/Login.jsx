export default function Login(){
    return(
        <section id="login">
            <div className="form">
                <h2>LOGIN</h2>
                <form  className="login-form">
                    <input type="text" name="email" id="login-email" placeholder="email" />
                    <input type="password" name="password" id="login-password" placeholder="password" />

                    <button type="submit">login</button>
                    <p className="message">Not registered? <a href="/login">Register now</a></p>
                </form>
            </div>
        </section>
    )
}