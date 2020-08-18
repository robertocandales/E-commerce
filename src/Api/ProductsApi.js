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
