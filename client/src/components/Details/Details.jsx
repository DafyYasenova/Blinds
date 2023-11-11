import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import * as blindService from '../../services/blindService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Details() {
    const { blindId } = useParams();
    const [blinds, setBlinds] = useState({});
    // console.log(blindId)

    useEffect(() => {
        blindService.getOne(blindId)
            .then(result => {
                setBlinds(result)
            })
    },[blindId])
    return (
        <section className={styles.details}>

            <h2>{blinds.name}</h2>
            <div className={styles["image-div"]}>
                <img src={blinds.imageUrl} alt={blinds.name} />
            </div>
            <div className={styles["details-product"]}>
                <article>
                    <p>Category: {blinds.category}</p>
                    <p>{blinds.description}</p>
                    <p>Material: {blinds.material}  Product Number: {blinds.productNumber}</p>
                    <p>Price: {blinds.price} lv.</p>
                    <p>Colors {blinds.colors}</p>
                </article>
                
                
                
                <Link to={`/details/${blindId}/edit`} ><button type="submit" >Edit</button></Link>
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