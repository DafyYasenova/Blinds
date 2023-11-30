
import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/likes';


export const getAllLikes = async (blindId) => {

    return await request.get(`/data/likes?where=blindId%3D%22${blindId}%22&distinct=_ownerId&count`)
};

export const likeById = async (data) => {
    return await request.post(baseUrl, data)
}

export const getAllLikePerUser = async (blindId, userId) => {
    return await request.get(`${baseUrl}?where=blindId%3D%22${blindId}%22%20and%20_ownerId%3D%22${userId}%22&count`);


}