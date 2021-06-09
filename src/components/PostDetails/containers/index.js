import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsSelector from 'redux/posts/selector';
import { useParams } from 'react-router';
import * as postsActions from 'redux/posts/actions';
import postsAPI from 'api/posts';
import writePostAPI from 'api/posts';
import PostDetails from '../layout';
import { useToasts } from 'react-toast-notifications';

const PostDetailsContainer = () => {
  let { id } = useParams();
  const { addToast } = useToasts();

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
        const { data } = await postsAPI.getPostsFromAPI();
        getAllPostsAction(data.data);
      } catch (e) {
        alert(e, 'Error get posts');
      }
    }
  }, [getAllPostsAction, id]);

  const createJsonFileInSystemAsync = async data => {
    try {
      const response = await writePostAPI.addPostInFile(data);
      if (response) {
        addToast('Saved Successfully', {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    } catch (error) {
      console.log(error);
      addToast('Error while trying to save in a file!', {
        appearance: 'error',
        autoDismiss: true,
      });
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
