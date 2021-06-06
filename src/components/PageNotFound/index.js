import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='pagenot-wrapper'>
      <h1>404 - Page Not Found!</h1>
      <div className='info'>
        <div>
          <p>
            Go back to landing page, <Link to={`/`}>click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
