import axios from 'axios';
import { BASE_API_URL, BASE_API_KEY } from '../config/config';

const options = {
  headers: {
    'X-API-KEY': BASE_API_KEY,
  }
};

export const fetchInspirationalQuotes = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/quotes?category=inspirational`, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


export const fetchExercicesByMuscle = async ( query ) => {
  const url = `${BASE_API_URL}/exercices?muscle=${query}`;
  const response = await axios.get(url, headers );
  return response.data;
};