import React from 'react';
import Header from '../../components/Header';
import Cards from 'components/LandingPage/components/Cards';
import PropTypes from 'prop-types';

const MainContent = ({ posts, logout }) => {
  return (
    <div className='main-content-wrapper'>
      <Header logout={logout} />
      <Cards posts={posts} />
    </div>
  );
};

MainContent.propTypes = {
  posts: PropTypes.array,
  logout: PropTypes.func,
};

export default MainContent;
