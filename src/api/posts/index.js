import API from '../axios';

export default class {
  static add = data => API.post('/write', data);
}
