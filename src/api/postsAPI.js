import axios from 'axios';

const KEY = '641c015fd5c04f40a5da45096615e6d4';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: KEY,
  },
});
