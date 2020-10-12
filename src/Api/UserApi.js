import { URLbase } from './URLbase';
import axios from 'axios';

const PostLogin = '/api/user/auth';
const Register = '/api/user';
const Update = '/api/user/';

export const authLogin = async (data) => {
  console.log(data, data);
  const options = {
    body: {
      ...data,
    },
  };
  return await axios.post(`${URLbase}${PostLogin}`, options.body);
};
export const RegisterUser = async (data) => {
  const options = {
    headers: { 'Access-Control-Allow-Origin': '*' },

    body: {
      ...data,
    },
  };
  return await axios.post(`${URLbase}${Register}`, options.body, options.headers);
};

export const UpdateUser = async (data, id, token) => {
  const options = {
    headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
    body: {
      ...data,
    },
  };
  return await axios.put(`${URLbase}${Update}${id}`, options.body, {
    headers: options.headers,
  });
};
