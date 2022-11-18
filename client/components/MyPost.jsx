import React from 'react'


function MyPost({ myPost }) {
  return (
    <div key={myPost.id}>
      <label>{myPost.description}</label>
      <div className="puppy">
        <img className="img-circle" src={myPost.img} alt={myPost.description} />
      </div>

    </div>
  )
}

export default MyPost
