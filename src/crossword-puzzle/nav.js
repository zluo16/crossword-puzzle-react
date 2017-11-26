import React from 'react'
import { Menu } from 'semantic-ui-react'

const Nav = ({ onAuthChange, onLogin, onSignUp }) => {
  return (
    <Menu stackable>
      <Menu.Item>
        <img src='./1142857-200.png' />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item name='login'>
          Login
        </Menu.Item>

        <Menu.Item name='signup'>
          Sign Up
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Nav
