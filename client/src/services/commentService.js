import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const createComment = async (blindId, comment, username) => {
    const newComment = await request.post(baseUrl, { blindId, comment, username });

    console.log('comment', comment)
    return newComment;
}

export const getAllComment = async (blindId) => {
    const query = new URLSearchParams({
        where: `blindId="${blindId}"`,
        load: `owner=_ownerId:users`,
    });
    const result = await request.get(`${baseUrl}?${query}`)
    return result;

}