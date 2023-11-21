import * as request from '../lib/requester';

const baseUrl = 'http://localhost:3030/users';


export const login = async (email, password) =>{
   const result =  request.post(`${baseUrl}/login`, {
        email,
        password
    });
    return result;
}