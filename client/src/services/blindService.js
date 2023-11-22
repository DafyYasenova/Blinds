import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/blinds';

export const getAll = async () => {

    const result = await request.get(baseUrl);
    const blinds = Object.values(result);
 
    return blinds;

    // console.log(result)
    //  return result;
};

export const create = async (blindData) => {
    const result = await request.post(baseUrl, blindData);

    console.log('create:', result);

    return result;
};

export const getOne = async (blindId) => {
    const result = await request.get(`${baseUrl}/${blindId}`);

    console.log(result);

    return result;
}