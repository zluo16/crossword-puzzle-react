import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

const SignUpForm = ({ open, onSignUp, onAuthChange, close }) => {
  return (
    <Modal size='mini' dimmer={false} open={open} onClose={close} closeOnDocumentClick={true}>
      <Modal.Header>Sign Up</Modal.Header>
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
          <Form.Field>
            <input
              type='password'
              placeholder='Confirm Password'
              name='passwordConfirmation'
              onChange={onAuthChange}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onSignUp}>Sign Up</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default SignUpForm
