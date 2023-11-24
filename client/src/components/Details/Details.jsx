import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments';

import * as blindService from '../../services/blindService';
import * as commentService from '../../services/commentService';
// import AuthContext from '../../contexts/authContext';
import { OneComment } from './Comments/OneComment';

export default function Details() {
    // const { username } = useContext(AuthContext)
    const { blindId } = useParams();
    const [blinds, setBlinds] = useState({});
    const [isCommentAreaDisabled, setCommentAreaDisabled] = useState(true);
    const [comments, setComments] = useState([]);
    console.log("comments2", comments)

    useEffect(() => {
        blindService.getOne(blindId)
            .then(result => {
                setBlinds(result)
                return commentService.getAllComment(blindId)
            })
            .then(result => {
                setComments(result)
            })

    }, [blindId,])


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

    const addCommentHandler = async (data) => {

        const newComment = await commentService.createComment(
            blindId,
            data.comment, data.username);
     
        setComments(state=>[...state,newComment]);
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
                     {comments.length > 0 ? comments.map(comment => <OneComment key={comment._id} {...comment} />)
                        : (<h4 > No comments yet...</h4>)} 
                </ul>
                {/* {comments.length === 0 && <h4>No comments yet...</h4>} */}

            </div>
        </section >
    )
}