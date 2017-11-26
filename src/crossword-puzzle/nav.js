import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {

  state = {}

  handleItemClick = (e, { name }) => {
    this.props.onButtonClick({ name })
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <img src='./1142857-200.png' alt='crossword-icon' />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={this.state.activeItem === 'login'}
            onClick={this.handleItemClick}
            >
            Login
          </Menu.Item>

          <Menu.Item
            name='signup'
            active={this.state.activeItem === 'signup'}
            onClick={this.handleItemClick}
            >
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
