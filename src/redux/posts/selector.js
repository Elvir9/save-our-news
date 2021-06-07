import { createSelector } from 'reselect';

export default createSelector([state => state.posts], state => state);
