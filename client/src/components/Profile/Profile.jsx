import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/authContext";
import BlindCard from "../Search/BlindCard/BlindCard";

import styles from '../Search/Search.module.css';
import stylesProfile from './Profile.module.css';
import * as blindService from '../../services/blindService';
export default function Profile() {

    const [myPost, setMyPost] = useState([]);
    const { userId, username, email } = useContext(AuthContext)

    useEffect(() => {
        blindService.getMyPost(userId)
            .then(result => setMyPost(result))
            .catch(error => console.log(error))
    }, []);
    
    return (
        <>
 <h2><img className={stylesProfile.avatar}src="/Images/avatar.png" />
 <span></span>{username}'s profile<p>email: {email}</p></h2>
 
            <div className={stylesProfile.profile}>
                <h2>Have a {myPost.length} post!</h2>
                {myPost.length > 0 
                ? <div >
                    <ul className={styles["blind-wrapper"]}>
                        {myPost.map(blind => <BlindCard key={blind._id} {...blind} />)}

                    </ul>
                </div>
             : <h2>No post yet...</h2>}

            </div>
        </>



    )
}