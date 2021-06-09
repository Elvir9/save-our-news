import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Header = ({ logout }) => {
  return (
    <Menu fixed='top' inverted className='header'>
      <Container className='header-title-container'>
        <h2>News Posts</h2>
      </Container>
      <Container className='header-logout'>
        <span onClick={logout}>Logout</span>
      </Container>
    </Menu>
  );
};

export default Header;
