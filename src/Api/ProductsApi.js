import { URLbase } from './URLbase';
import axios from 'axios';

const getAllProduct = '/api/products';
const getProduct = '/api/products/';
const deleteProduct = '/api/products/';
const updateProduct = '/updateProduct/';
const createProduct = '/api/products';

export const allProducts = async () => {
  const options = {
    body: {},
  };
  return await axios.get(`${URLbase}${getAllProduct}`, options.body);
};
export const productById = async (id) => {
  const options = {
    body: {},
  };
  return await axios.get(`${URLbase}${getProduct}${id}`, options.body);
};
export const newProduct = async (data, token) => {
  const options = {
    body: {
      ...data,
    },
    headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
  };
  return await axios.post(`${URLbase}${createProduct}`, options.body, { headers: options.headers });
};
export const deleteAproduct = async (id, data) => {
  const options = {
    body: {
      ...data,
    },
  };
  return await axios.delete(`${URLbase}${deleteProduct}${id}`, options.body);
};
export const updateAproduct = async (id, data) => {
  const options = {
    body: {
      ...data,
    },
  };
  return await axios.put(`${URLbase}${updateProduct}${id}`, options.body);
};
