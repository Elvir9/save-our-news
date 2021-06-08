import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

const Login = () => {
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
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Link to='/dashboard'>
              <Button color='teal' fluid size='large'>
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
