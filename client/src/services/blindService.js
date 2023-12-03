import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/blinds';

export const getAll = async () => {

    const result = await request.get(baseUrl);

    return result;
};

export const create = async (blindData) => {
    const result = await request.post(baseUrl, blindData);

    return result;
};

export const getOne = async (blindId) => {
    const result = await request.get(`${baseUrl}/${blindId}`);

    return result;
}

export const edit = async (blindId, blindData) => {
    const result = await request.put(`${baseUrl}/${blindId}`, blindData);

    return result;
}

export const remove = async (blindId) => request.del(`${baseUrl}/${blindId}`);


export const getLatestBlinds = async () => {

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);

    return result;
}

export const search = async (query) => {

    const result = await request.get(`${baseUrl}?where=name%20LIKE%20%22${query}%22`)

    return result;
}
