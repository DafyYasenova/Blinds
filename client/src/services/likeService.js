
import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/likes';


export const getAllLikesForBlind = async (blindId) => {
    
    return await request.get(`${baseUrl}?where=blindId%3D%22${blindId}%22&distinct=_ownerId&count`);
};

export const addLike = async (data) => {

    return await request.post(baseUrl, data);
 
};

export const unLike = async (likeId) =>{

   await request.del(`${baseUrl}/${likeId}`);
};

export const checkBlindLiked = async (blindId, userId) => {

    return await request.get(`${baseUrl}?where=blindId%3D%22${blindId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}


export const getAllLikes = async(blindId)=>{

    const query = new URLSearchParams({
        where: `blindId="${blindId}"`,
        load: `owner=_ownerId:users`,
    });
   return await request.get(`${baseUrl}?${query}`)
  
}

