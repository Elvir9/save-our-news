import React from 'react';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Loading = ({ text }) => {
  return (
    <Loader active inline='centered' size='big' className='base-loader'>
      {text}
    </Loader>
  );
};

Loading.defaultProps = {
  text: 'Loading...',
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
