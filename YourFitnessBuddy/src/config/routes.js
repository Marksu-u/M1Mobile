import axios from 'axios';
import { BASE_API_URL, BASE_API_KEY } from './config';

const options = {
  headers: {
    'X-API-KEY': BASE_API_KEY,
  }
};

export const fetchInspirationalQuotes = async () => {
  return api = await axios.fetch(`${BASE_API_URL}/quotes.category=inspirational`, { options }).json();
};

export const fetchExercicesByMuscle = async ( query ) => {
  const url = `${BASE_API_URL}/exercices?muscle=${query}`;
  const response = await axios.get(url, headers );
  return response.data;
};


  // const url = `${BASE_API_URL}/quotes?category=inspirational`;
  // const response = await axios.get(url, headers );
  // return response.data;