import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import * as blindService from '../../services/blindService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Details() {
    const { blindId } = useParams();
    const [blinds, setBlinds] = useState({});
    const [isCommentAreaDisabled, setCommentAreaDisabled] = useState(true)
 

    useEffect(() => {
        blindService.getOne(blindId)
            .then(result => {
                setBlinds(result)
            })
    },[blindId])

    const deleteClickHandler = () =>{
        onDeleteClick(blindId)
    }

    const filterColors = (blinds)  => {
        if (!blinds || !blinds.colors) {
            return 'No colors available';
        }
    
       const filteredColors = Object.keys(blinds.colors).filter(color => blinds.colors[color] === true);
     
        return filteredColors.join(', ');
    }
    
const hideShowCommentHandler = (e) => {
    e.preventDefault()
    setCommentAreaDisabled(false)
    console.log('disabled fn')
}
    return (
        <section className={styles.details}>

            <h2>{blinds.name}</h2>
            <div className={styles["image-div"]}>
                <img src={blinds.imageUrl} alt={blinds.name} />
            </div>
            <div className={styles["details-product"]}>
                <article className={styles["span-style"]}>
                    <p><span>Category: </span>{blinds.category}</p>
                    <p><span>Info: </span> {blinds.description}</p>
                    <p> <span>Material: </span>{blinds.material}  <span>  Product Number: </span> {blinds.productNumber}</p>
                    <p><span>Price: </span> {blinds.price} lv.</p>
                    <p> <span>Colors: </span> {filterColors(blinds)}</p>
                </article>
                
                
                
                <Link to={`/details/${blindId}/edit`} ><button type="submit" >Edit</button></Link>
                <button type="submit" onClick={deleteClickHandler}>Delete</button>
                <button type="submit">Like</button>
                <button type="submit" onClick={hideShowCommentHandler}>Comment</button>
                <button type="submit">Buy</button>


                <div className={styles["comment-area"] } >
                    <textarea hidden={isCommentAreaDisabled} id="comment-area" name="comment" placeholder="Your comment" rows="3"
                        cols="40" ></textarea>

                    <button hidden={isCommentAreaDisabled} onClick={setCommentAreaDisabled} type="submit" >Add comment</button>
                </div>
            </div>
            <div className={styles.comments}>
                <h3>Comments: </h3>
                <p><img src='/Images/user-icon.jpg' alt="user-icon" className={styles["user-icon"]}></img> User: </p>  <p> <img src="/Images/user-comment-icon.png"className={styles['user-icon']}></img> Comment</p>
            </div>
        </section>
    )
}