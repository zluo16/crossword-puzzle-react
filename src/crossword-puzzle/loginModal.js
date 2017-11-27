import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

const LoginForm = ({ open, onLogin, onAuthChange, close }) => {
  return (
    <Modal size='mini' dimmer={false} open={open} onClose={close} closeOnDocumentClick={true}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <input
              placeholder='Username'
              name='username'
              onChange={onAuthChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={onAuthChange}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onLogin}>Log In</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default LoginForm
