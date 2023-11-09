import styles from './ContactUs.module.css';

export default function ContactUs(){
    return(
        <section id="contact-us">
            <div className={styles["contact-form"]}> 
      
                <h2>CONTACT US</h2>
                <form >
                    <input type="text" name="name" id="name" placeholder="Name" />
                    
                    <textarea id="contact-area" name="contact" placeholder="Add your message" rows="5"
                        cols="50"></textarea>

                    <button type="submit">SEND</button>

                </form>
            </div>
           
        </section>
    )
}