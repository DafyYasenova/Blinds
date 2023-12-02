import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/blinds';

export const getAll = async () => {

    const result = await request.get(baseUrl);
    // const blinds = Object.values(result);
 
    // return blinds;

    // // console.log(result)
    return result;
};

export const create = async (blindData) => {
    const result = await request.post(baseUrl, blindData);

    console.log('create:', result);

    return result;
};

export const getOne = async (blindId) => {
    const result = await request.get(`${baseUrl}/${blindId}`);

    // console.log(result);

    return result;
}

export const edit = async( blindId, blindData) =>{
const result = await request.put(`${baseUrl}/${blindId}`, blindData);

return result;
}

export const remove = async (blindId) => request.del(`${baseUrl}/${blindId}`);

 
export const getLatestBlinds = async() => {

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
  
    return result;
}

export const search = async(name) => {
   
    const result = await request.get(`${baseUrl}?where=name%20LIKE%20%22${name}%22`)
  
    return result;
}
