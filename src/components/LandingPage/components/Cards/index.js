import React from 'react';
import _ from 'lodash';
import Loading from '../../../shared/Loading';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cards = ({ posts }) => {
  return (
    <div className='cards-wrapper'>
      {!_.isEmpty(posts) ? (
        posts.map(post => (
          <Card key={post.title}>
            <Image src={post.urlToImage} wrapped />
            <Card.Content className='title-content'>
              <Card.Header>{post.title}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>{post.description}</Card.Description>
            </Card.Content>
            <Card.Content className='read-full-content'>
              {/* Some ids from news post have a value of null, so I put author as ID params */}
              <Link
                className='read-full'
                to={`/details/${post.author}/${post.source.name}`}
              >
                READ FULL ARTICLE
              </Link>
            </Card.Content>
          </Card>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

Cards.propTypes = {
  posts: PropTypes.array,
};

export default Cards;
