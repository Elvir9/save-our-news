import newsPostInitialState from './initialState';
import { GET_POSTS } from './actionTypes';

const postReducer = (state = newsPostInitialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default postReducer;
