import React, { useState } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EditAndSavePostModal = ({ open, onClose, postData }) => {
  const [postForm, setPostForm] = useState({
    author: postData.author,
    title: postData.title,
    content: postData.content,
    description: postData.description,
  });

  const createObjectToPost = () => {
    return {
      author: postForm.author,
      title: postForm.title,
      content: postForm.content,
      description: postForm.description,
    };
  };
  const saveChangesInDBAsync = () => {
    const dataToPost = createObjectToPost();
    onClose();
  };
  const validateForm = () =>
    !postForm.author ||
    !postForm.title ||
    !postForm.content ||
    !postForm.description;
  return (
    <Modal size='small' open={open} onClose={onClose}>
      <Modal.Header className='title-header'>
        Save changes on disk file
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Form.Input
              error={!postForm.author}
              label='Author'
              placeholder='Add new author'
              value={postForm.author}
              onChange={(e, { value }) =>
                setPostForm({ ...postForm, author: value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              error={!postForm.title}
              placeholder='Add new title'
              label='Title'
              value={postForm.title}
              onChange={(e, { value }) =>
                setPostForm({ ...postForm, title: value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              error={!postForm.content}
              placeholder='Add new content'
              label='Content'
              value={postForm.content}
              onChange={(e, { value }) =>
                setPostForm({ ...postForm, content: value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              error={!postForm.description}
              placeholder='Add new description'
              label='Description'
              value={postForm.description}
              onChange={(e, { value }) =>
                setPostForm({ ...postForm, description: value })
              }
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          positive
          onClick={saveChangesInDBAsync}
          disabled={validateForm()}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

EditAndSavePostModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  postData: PropTypes.object,
};

export default EditAndSavePostModal;
