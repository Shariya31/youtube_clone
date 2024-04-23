import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'b79f5c6385msh25c1d79eda14b15p10e9aejsnea4b89735998',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,
    options);
    return data;
  }