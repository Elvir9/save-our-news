import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsSelector from 'redux/posts/selector';
import { useParams } from 'react-router';
import * as postsActions from 'redux/posts/actions';
import postsAPI from 'api/postsAPI';
import writePostAPI from 'api/posts';
import PostDetails from '../layout';

const PostDetailsContainer = () => {
  let { id } = useParams();

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
    if (id) {
      try {
        const { data } = await postsAPI.get('/top-headlines', {
          params: {
            country: 'us',
          },
        });
        getAllPostsAction(data.articles);
      } catch (e) {
        alert(e, 'Error get posts');
      }
    }
  }, [getAllPostsAction, id]);

  const createJsonFileInSystemAsync = async data => {
    try {
      const response = await writePostAPI.add(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsAsync();
  }, [getPostsAsync]);

  return (
    <div>
      <PostDetails
        posts={posts}
        createJsonFileInSystemAsync={createJsonFileInSystemAsync}
      />
    </div>
  );
};

export default PostDetailsContainer;
