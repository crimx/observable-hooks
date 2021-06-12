import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom'
import { useObservableSuspense } from 'observable-hooks'

import {
  userResource,
  postsResource,
  userListResource,
  fetchProfileData
} from './fakeApi'

fetchProfileData('crimx')

function ProfilePage() {
  const [userId, setUserId] = useState('crimx')
  return (
    <div>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <ProfileDetails />
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProfileTimeline />
          <Suspense fallback={<h1>Loading user list...</h1>}>
            <ProfileUserList
              user={userId}
              onChange={id => {
                setUserId(id)
                fetchProfileData(id)
              }}
            />
          </Suspense>
        </Suspense>
      </Suspense>
    </div>
  )
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = useObservableSuspense(userResource)
  return <h1>{user.name}</h1>
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = useObservableSuspense(postsResource)
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  )
}

interface ProfileUserListProps {
  user: string
  onChange: (id: string) => void
}

function ProfileUserList(props: ProfileUserListProps) {
  const userList = useObservableSuspense(userListResource)

  return (
    <div>
      <h1>User List</h1>
      <select
        value={props.user}
        onChange={e => props.onChange(e.currentTarget.value)}
      >
        {userList.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<ProfilePage />, rootElement)
