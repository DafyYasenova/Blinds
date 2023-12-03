import styles from './Details.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments';

import * as blindService from '../../services/blindService';
import * as commentService from '../../services/commentService';
import * as likeService from '../../services/likeService';
import AuthContext from '../../contexts/authContext';
import { OneComment } from './Comments/OneComment';
import Delete from '../Delete/Delete';

export default function Details() {
    const navigate = useNavigate();
    const { username, userId } = useContext(AuthContext);
    const { blindId } = useParams();
    const [blinds, setBlinds] = useState({});
    const [isCommentAreaDisabled, setCommentAreaDisabled] = useState(true);
    const [comments, setComments] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [likes, setLikes] = useState(0);
    const [likeId, setLikeId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {

                const blindDetails = await blindService.getOne(blindId);
                setBlinds(blindDetails);

                const commentsResult = await commentService.getAllComment(blindId);
                setComments(commentsResult);

                const initialLikes = await likeService.getAllLikes(blindId);

                setLikes(initialLikes.length);

                let foundLike = initialLikes.find(el => el.userId === userId);

                if (foundLike) {
                    setLikeId(foundLike._id);
                }


            } catch (error) {
                console.error('Error fetching details:', error);
            }

        }
        fetchData()
    }, [blindId]);


    const filterColors = (blinds) => {
        if (!blinds || !blinds.colors) {
            return 'No colors available';
        }

        const filteredColors = Object.keys(blinds.colors).filter(color => blinds.colors[color] === true);
        return filteredColors.join(', ');
    }

    const hideShowCommentHandler = (e) => {
        e.preventDefault();
        setCommentAreaDisabled(oldState => !oldState);
    };

    const addCommentHandler = async (data) => {

        const newComment = await commentService.createComment(
            blindId,
            data.comment, data.username)

        setComments(state => [...state, newComment]);
        setCommentAreaDisabled(true);

    };

    const isOwner = userId === blinds._ownerId;

    const deleteClickHandler = () => setShowDelete(true);

    const onDelete = async () => {
        try {
            await blindService.remove(blindId);
            navigate('/catalog');

        } catch (error) {

            console.log(error);
        }
    }


    const likeClickHandler = async () => {
        try {

            if (!likeId) {
                const result = await likeService.addLike({ blindId, userId });

                setLikes((prevLikes) => prevLikes + 1);
                setLikeId(result._id);

            } else {
                await likeService.unLike(likeId);
                setLikes((prevLikes) => prevLikes - 1);
                setLikeId('');

                console.log('You have already liked this blind.');
            }
        } catch (error) {
            console.error('Error liking blind:', error);
        }
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
                
                {likes > 0 ? <p>Likes ♥ {likes}</p> : ''}

                {isOwner && (
                    <>
                        <Link to={`/details/${blindId}/edit`} ><button type="submit" >Edit</button></Link>
                        <button type="submit" onClick={deleteClickHandler}>Delete</button>

                        {showDelete && <Delete
                            onDelete={onDelete}
                            showDelete={showDelete}
                            onClose={() => setShowDelete(false)}
                            blindId
                            blindName={blinds.name}
                        />}
                    </>)}



                {!isOwner && (
                    <>
                        <button type="submit" onClick={likeClickHandler}{...likes}>{likeId ? `Unlike` : `Like`}   </button>
                        <button type="submit" onClick={hideShowCommentHandler}>Comment</button>
                    </>
                )}

                <Link to={`/catalog`} ><button type="submit">Back</button></Link>

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
            </div>
        </section >
    )
}