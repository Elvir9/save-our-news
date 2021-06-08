import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

const Login = () => {
  const [userCredential, setUserCredential] = useState({
    userName: '',
    password: '',
  });

  const createObjectToPost = () => {
    return {
      username: userCredential.userName,
      password: userCredential.password,
    };
  };

  const sendCredentialToBackendAsync = () => {
    const dataToPost = createObjectToPost();
    console.log(dataToPost);
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
            <Link to='/dashboard'>
              <Button
                color='teal'
                fluid
                size='large'
                disabled={validateForm()}
                onClick={sendCredentialToBackendAsync}
              >
                Login
              </Button>
            </Link>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
