import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const TopUsersContainer = ({ users }) => {
  return (
    <Segment floated='left' className='top-line'>
      <List ordered>
        {users.map(user => {
          return (
            <List.Item>
              <strong>{user.user_name}</strong> score: {user.score}
            </List.Item>
          )
        })}
      </List>
    </Segment>
  )
}

export default TopUsersContainer
