import React from 'react';
import { Header, Segment, Image, Button, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SegmentPost = ({ postData }) => {
  return (
    <div className='segment-wrapper'>
      <Segment>
        <Image src={postData.urlToImage} wrapped size='large' />
        <Header>Author: {postData.author}</Header>
        <Segment.Group>
          <h4>Source Name:</h4> {postData.source.name}
        </Segment.Group>
        <Segment.Group>
          <h4>Title:</h4> {postData.title}
        </Segment.Group>
        <Segment.Group>
          <h4>Description:</h4> {postData.description}
        </Segment.Group>
        <Segment.Group>
          <h4>Published at date:</h4>
          {postData.publishedAt}
        </Segment.Group>
        <Segment.Group>
          <h4>Content:</h4> {postData.content}
        </Segment.Group>
        <Container textAlign='right'>
          <Button content='Edit' icon='edit' className='edit-post' />
        </Container>
      </Segment>
    </div>
  );
};

SegmentPost.propTypes = {
  postData: PropTypes.object,
};

export default SegmentPost;
