import API from '../axios';

export default class {
  static addPostInFile = data => API.post('/write', data);
  static getPostsFromAPI = () => API.get('/get-posts');
}
