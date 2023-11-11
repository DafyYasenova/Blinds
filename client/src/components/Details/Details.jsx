import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import * as blindService from '../../services/blindService';
import { useState, useEffect } from 'react';


export default function Details() {
    const { blindId } = useParams();
    const [blinds, setBlinds] = useState({});
    console.log(blindId)

    useEffect(() => {
        blindService.getOne(blindId)
            .then(result => {
                setBlinds(result)
            })
    },[blindId])
    return (
        <section className={styles.details}>

            <h2>Name Product</h2>
            <div className={styles["image-div"]}>
                <img src="/Images/original_2-scaled.jpg" alt="{{image}}" />
            </div>
            <div className={styles["details-product"]}>
                <article>
                    <p>Category: options</p>
                    <p>Description</p>
                    <p>Material: mm Product Number: pN</p>
                    <p>Price: p$</p>
                    <p>Colors clr</p>
                </article>
                
                
                <button type="submit">Edit</button>
                <button type="submit">Delete</button>
                <button type="submit">Like</button>
                <button type="submit">Comment</button>
                <button type="submit">Buy</button>


                <div className={styles["comment-area"]} >
                    <textarea id="comment-area" name="comment" placeholder="Your comment" rows="3"
                        cols="40"></textarea>

                    <button type="submit">Add comment</button>
                </div>
            </div>
            <div className={styles.comments}>
                <h3>Comments: </h3>
                <p><img src='/Images/user-icon.jpg' alt="user-icon" className={styles["user-icon"]}></img> User: </p>  <p> <img src="/Images/user-comment-icon.png"className={styles['user-icon']}></img> Comment</p>
            </div>
        </section>
    )
}