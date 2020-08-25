import axios from 'axios';

const URL = 'https://us-central1-e-commerce-92b6e.cloudfunctions.net/app/api';
const getAllProduct = '/getAllProduct';
const getProduct = '/getProduct';
const deleteProduct = '/deleteProduct';
const updateProduct = '/updateProduct';

export const allProducts = async () => {
  const options = {
    body: {},
  };
  return await axios.get(`${URL}${getAllProduct}`, options.body);
};
const URL1 = 'https://apirestbackendecommerce.herokuapp.com';
const PostLogin = '/api/user/auth';
const Register = '/api/user';

export const authLogin = async (data) => {
  console.log(data, data);
  const options = {
    body: {
      ...data,
    },
  };
  return await axios.post(`${URL1}${PostLogin}`, options.body);
};
export const RegisterUser = async (data) => {
  const options = {
    headers: { 'Access-Control-Allow-Origin': '*' },

    body: {
      ...data,
    },
  };
  return await axios.post(`${URL1}${Register}`, options.body, options.headers);
};
