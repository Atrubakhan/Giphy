import axios from 'axios';

const API_KEY = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

const GiphyService = {
  getTrendingGifs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/trending`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  searchGifs: async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          api_key: API_KEY,
          q: query,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export default GiphyService;
