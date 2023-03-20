import axios from 'axios';

import { BASE_URL, BASE_KEY } from './config';

export const fetchInspirationalQuotes = async () => {
  const url = `${BASE_URL}/quotes?category=inspirational`;
  const headers = {
    'X-API-KEY': BASE_KEY,
  };
  const response = await axios.get(url, { headers });
  return response.data;
};
