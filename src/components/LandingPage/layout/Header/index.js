import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu fixed='top' inverted className='header'>
      <Container>
        <h2>News Posts</h2>
      </Container>
    </Menu>
  );
};

export default Header;
