import React from 'react'


function MyPost({ myPost }) {
  return (
    <div key={myPost.id}>
      <label>{myPost.description}</label>
      <img src={myPost.img} alt={myPost.description} />
    </div>
  )
}

export default MyPost
