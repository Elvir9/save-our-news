import React from 'react';
import Login from '../layout';
import loginAPI from '../../../api/login';

const LoginContainer = () => {
  const loginUserIntoApp = async data => {
    try {
      const response = await loginAPI.add(data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return <Login loginUserIntoApp={loginUserIntoApp} />;
};

export default LoginContainer;
