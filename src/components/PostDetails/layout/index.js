import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SegmentPost from '../components/Segment';
import { useParams } from 'react-router';
import _ from 'lodash';
import Loading from 'components/shared/Loading';

const PostDetails = ({ posts }) => {
  let { id } = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (posts) {
      const postsData = posts.find(data => data.source.name === id);
      setPostData(postsData);
      return postsData;
    }
  }, [posts, id]);

  return (
    <div>
      {!_.isEmpty(postData) ? <SegmentPost postData={postData} /> : <Loading />}
    </div>
  );
};
PostDetails.propTypes = {
  posts: PropTypes.array,
};
export default PostDetails;
