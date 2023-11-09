import styles from './Details.module.css';

export default function Details(){
    return(
        <section className={styles.details}>

            <h2>Name Product</h2>
            <div className={styles["image-div"]}>
                <img src="/Images/original_2-scaled.jpg" alt="{{image}}"/>
            </div>
            <div className={styles["details-product"]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam cupiditate dicta earum
                    officiis nesciunt maiores, ex quidem nobis velit, vel minima veniam voluptas. Ullam animi eos
                    suscipit iusto illum.
                </p>
                <div className="color-options">
                    <label>
                        {/* <input type="radio" name="color-options" />
                        <img src="" alt=""/> */}

                    </label>

                </div>
                <button type="submit">Edit</button>
                <button type="submit">Delete</button>
                <button type="submit">Like</button>
                <button type="submit">Comment</button>
                <button type="submit">Buy</button>
                
                
                <div className={styles["comment-area"]}>
                <textarea id="comment-area" name="comment" placeholder="Your comment" rows="3"
                        cols="40"></textarea>

                    <button type="submit">Add comment</button>
            </div>
            </div>
        {/* <div className='comments'>
            <h2>All comments: </h2>
        </div> */}
        </section>
    )
}