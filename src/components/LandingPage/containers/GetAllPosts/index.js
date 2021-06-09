import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsAPI from '../../../../api/posts';
import MainContent from '../../layout/Main';
import postsSelector from 'redux/posts/selector';
import * as postsActions from 'redux/posts/actions';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import authService from 'utils/authService';

const LandingContainer = () => {
  const { addToast } = useToasts();
  let history = useHistory();

  const dispatch = useDispatch();

  // STATE
  const posts = useSelector(postsSelector);

  // ACTION
  const getAllPostsAction = useCallback(
    payload => dispatch(postsActions.getNewsPostAction(payload)),
    [dispatch]
  );

  const logout = () => {
    authService.clearLocalStorage();
    history.push('/');
  };

  // API CALLS
  const getPostsAsync = useCallback(async () => {
    try {
      const { data } = await postsAPI.getPostsFromAPI();
      getAllPostsAction(data.data);
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
  }, [getAllPostsAction]);

  useEffect(() => {
    getPostsAsync();
  }, [getPostsAsync]);

  return (
    <div>
      <MainContent posts={posts} logout={logout} />
    </div>
  );
};

export default LandingContainer;
