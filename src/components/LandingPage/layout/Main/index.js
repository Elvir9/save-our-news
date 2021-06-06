import React from 'react';
import Header from '../Header';
import Cards from 'components/LandingPage/layout/Cards';
import PropTypes from 'prop-types';

const MainContent = ({ posts }) => {
  return (
    <div className='main-content-wrapper'>
      <Header />
      {/* <Cards posts={posts} /> */}
    </div>
  );
};

MainContent.propTypes = {
  posts: PropTypes.array,
};

export default MainContent;
