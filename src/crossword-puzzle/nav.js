import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'

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

        <Menu.Item>
          <Header size='small'>Jeopardy API Crossword</Header>
        </Menu.Item>

        {this.props.loggedIn() ?
        <Menu.Menu position='right'>
          <Menu.Item name='currentUser'>
            {this.props.currentUser.user_name}
          </Menu.Item>

          <Menu.Item
            name='logout'
            active={this.state.activeItem === 'logout'}
            onClick={this.handleItemClick}
            >
            Logout
          </Menu.Item>
        </Menu.Menu>
        :
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
      }
      </Menu>
    )
  }
}
