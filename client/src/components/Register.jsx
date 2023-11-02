export default function Register(){
    return (
        <section id="register">
            <div className="form">
                <h2>REGISTER</h2>
                <form className="register-form" >
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p className="message">Already registered? <a href="/login">Login now</a></p>
                </form>
            </div>
        </section>
    )
}