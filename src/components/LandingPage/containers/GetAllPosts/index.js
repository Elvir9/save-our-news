import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsAPI from '../../../../api/postsAPI';
import MainContent from '../../layout/Main';
import postsSelector from 'redux/posts/selector';
import * as postsActions from 'redux/posts/actions';

const LandingContainer = () => {
  const dispatch = useDispatch();

  // STATE
  const posts = useSelector(postsSelector);

  // ACTION
  const getAllPostsAction = useCallback(
    payload => dispatch(postsActions.getNewsPostAction(payload)),
    [dispatch]
  );

  // API CALLS
  const getPostsAsync = useCallback(async () => {
    try {
      const { data } = await postsAPI.get('/top-headlines', {
        params: {
          country: 'us',
        },
      });
      getAllPostsAction(data.articles);
    } catch (e) {
      alert(e, 'Error');
    }
  }, [getAllPostsAction]);

  useEffect(() => {
    getPostsAsync();
  }, [getPostsAsync]);

  return (
    <div>
      <MainContent />
    </div>
  );
};

export default LandingContainer;
