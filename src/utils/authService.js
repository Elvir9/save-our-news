export default class {
  static setUserAccessToken = token => {
    localStorage.setItem('token', token);
  };

  static setToken = token => {
    localStorage.setItem('token', token);
  };

  static getToken = () => {
    return localStorage.getItem('token');
  };
}
