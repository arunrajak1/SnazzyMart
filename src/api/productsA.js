// api/products.js

import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com/products/categories';

const productsHandler = async () => {
  try {
    const response = await axios.get(apiUrl);
    const products = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching products' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

export default productsHandler;
