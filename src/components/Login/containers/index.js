import React from 'react';
import Login from '../layout';
import loginAPI from '../../../api/login';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import authService from 'utils/authService';

const LoginContainer = () => {
  const { addToast } = useToasts();
  let history = useHistory();

  const saveUserInfoInLocalStorage = token => {
    authService.setUserAccessToken(token);
  };

  const loginUserIntoApp = async data => {
    try {
      const response = await loginAPI.add(data);
      if (response) {
        saveUserInfoInLocalStorage(response.data.token);
        history.push('/dashboard');
        addToast('Successfully logged in!', {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    } catch (e) {
      console.log(e);
      history.push('/');
      addToast(
        'Error while trying to login into the application.. Please check your credentials!',
        {
          appearance: 'error',
          autoDismiss: true,
        }
      );
    }
  };
  return <Login loginUserIntoApp={loginUserIntoApp} />;
};

export default LoginContainer;
