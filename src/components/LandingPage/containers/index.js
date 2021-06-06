import React, { useEffect, useCallback } from 'react';
import postsAPI from '../../../api/postsAPI';
import MainContent from '../layout/Main';

const LandingContainer = () => {
  // API CALLS
  const getPostsAsync = useCallback(async () => {
    try {
      const { data } = await postsAPI.get('/top-headlines', {
        params: {
          country: 'us',
        },
      });
      //   getAllPostsAction(data.articles);
    } catch (e) {
      alert(e, 'Error');
    }
  }, []);
  //   [getAllPostsAction]);

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
