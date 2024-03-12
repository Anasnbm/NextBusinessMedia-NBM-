import axios from 'axios';

const BaseUrl = 'https://dummyjson.com/';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BaseUrl}products`);
    return response.data.products; 
  } catch (error) {
    console.error('Error fetching users:', error);
 
  }
};

// searchingApi
export const searchData = async (searchQuery) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`);
      return response.data.products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  