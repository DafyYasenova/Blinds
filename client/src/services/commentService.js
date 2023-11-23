import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const createComment = async (blindId, comment) => {
    const newComment = await request.post(baseUrl, {
        blindId,
        comment,
    });
    // console.log('username', username)
    // console.log('comment', comment)
    return newComment;
}

export const getAllComment = async (blindId) => {
    const query = new URLSearchParams({
        where: `blindId="${blindId}"`,
        load: `owner=_ownerId:users`,
    });
    const result = await request.get(`${baseUrl}?${query}`)
    return result;

// const result = await request.get(baseUrl);
// return Object.values(result).filter(comment => comment.blindId === blindId);
}