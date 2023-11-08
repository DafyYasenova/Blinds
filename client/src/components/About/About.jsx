import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.welcome}>
            <h2>Welcome to the world of blinds</h2>
            <p>Here you will find a wide variety of blinds, the perfect solution for your interior. We have a large
                range of models, colors, fabrics and sizes. We work on individual projects, taking into account the
                specific requirements of each.
            </p>
            <img src="/Images/foto-shtora.jpg" alt="{{image}}" />
            <h3>Types of internal blinds: </h3>
            <div>
            <span>Harmony - blind-curtain type, </span>
            <span>Day and night, </span>
            <span>Aluminum horizontal blinds, </span>
            <span>Vertical blinds, </span>
            <span>Photo blinds </span>
            </div>
            {/* <img src="/Images/shtora-harmoniya.jpg" alt="{{image}}" />
        <img src="/Images/vertikalni-shtori.jpg" alt="{{image}}" />
        <img src="/Images/perde-shtora.jpg" alt="{{image}}" /> */}
        </section>
    )
}