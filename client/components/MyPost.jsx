import React from 'react'

function MyPost({ myPost }) {
  return (
    <div key={myPost.id}>
      <label>{myPost.description}</label>
    </div>
  )
}

export default MyPost
