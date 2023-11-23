import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments'

import * as blindService from '../../services/blindService';
import * as commentService from '../../services/commentService';

export default function Details() {
    const { blindId } = useParams();
    const [blinds, setBlinds] = useState({});
    const [isCommentAreaDisabled, setCommentAreaDisabled] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        blindService.getOne(blindId)
            .then(result => {
                setBlinds(result)
                return commentService.getAllComment(blindId)
            })
            .then(result => {
                setComments(result)
            })

    }, [blindId])


    const filterColors = (blinds) => {
        if (!blinds || !blinds.colors) {
            return 'No colors available';
        }

        const filteredColors = Object.keys(blinds.colors).filter(color => blinds.colors[color] === true);

        return filteredColors.join(', ');
    }

    const hideShowCommentHandler = (e) => {
        e.preventDefault()
        setCommentAreaDisabled(false);
    }

    const addCommentHandler = async (e, username, comment,) => {
        e.preventDefault();
        const newComment = await commentService.createComment(blindId, username, comment);

        setComments((state) => [...state, newComment]);
        setCommentAreaDisabled(true)

    };

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
                <button type="submit">Delete</button>
                <button type="submit">Like</button>
                <button type="submit" onClick={hideShowCommentHandler}>Comment</button>
                <button type="submit">Buy</button>

                <Comments
                    addComment={addCommentHandler}
                    comments={comments}
                    isCommentAreaDisabled={isCommentAreaDisabled}

                />
            </div>


            <div className={styles.comments}>
                <h3>Comments: </h3>
                <ul>
                    {comments.map(x => (
                        <li key={x._id}>
                            <p> <img src="/Images/user-comment-icon.png" className={styles['user-icon']}></img> {x.owner.username}: {x.comment}</p>
                        </li>

                    ))}
                </ul>
                {comments.length === 0 && <h4>No comments yet...</h4>}

            </div>
        </section>
    )
}