import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Login = ({ loginUserIntoApp }) => {
  const [userCredential, setUserCredential] = useState({
    userName: '',
    password: '',
  });

  const createObjectToPost = () => {
    return {
      userName: userCredential.userName,
      password: userCredential.password,
    };
  };

  const sendCredentialToBackendAsync = async () => {
    const dataToPost = createObjectToPost();
    await loginUserIntoApp(dataToPost);
  };

  const validateForm = () =>
    !userCredential.userName || !userCredential.password;

  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              value={userCredential.userName}
              onChange={(e, { value }) =>
                setUserCredential({ ...userCredential, userName: value })
              }
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={userCredential.password}
              onChange={(e, { value }) =>
                setUserCredential({ ...userCredential, password: value })
              }
            />
            <Button
              color='teal'
              fluid
              size='large'
              disabled={validateForm()}
              onClick={sendCredentialToBackendAsync}
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

Login.propTypes = {
  loginUserIntoApp: PropTypes.func,
};

export default Login;
