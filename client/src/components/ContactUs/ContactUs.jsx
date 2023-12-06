import styles from './ContactUs.module.css';

export default function ContactUs() {
    return (
        <section className={styles["contact-us"]} id="contact-us">
            <div className={styles.contact}>
                <h2>Blinds dreams LTD</h2>
                <p>Here you will find a wide variety of blinds, the perfect solution for your interior. We have a large
                    range of models, colors, fabrics and sizes. </p>
                <p>We are always at your disposal. Do not hesitate to contact us for a personal consultation and to satisfy your desire.</p>
                <p>Bulgaria</p>
                <p>+359 893 *** ***</p>
                <p>email: blinds-of-dreams@gmail.com</p>
            </div>
            <div className={styles["contact-form"]}>

                <img src='/Images/33-Butterflies-800x600.jpg' width="470px" alt="blinds" />
                {/* <h2>CONTACT US</h2>
                <form >
                    <input type="text" name="name" id="name" placeholder="Name" />
                    
                    <textarea id="contact-area" name="contact" placeholder="Add your message" rows="5"
                        cols="50"></textarea>

                    <button type="submit">SEND</button>

                </form> */}
            </div>


        </section>
    )
}