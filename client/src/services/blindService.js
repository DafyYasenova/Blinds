import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/blinds';

export const getAll = async () => {

    const result = await request.get(baseUrl);
    const blinds = Object.values(result);
    // console.log(blinds)

    return blinds;
}   