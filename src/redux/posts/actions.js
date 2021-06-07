import { GET_POSTS } from './actionTypes';

export const getNewsPostAction = payload => ({
  type: GET_POSTS,
  payload,
});
