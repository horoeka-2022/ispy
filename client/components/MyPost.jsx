import React from 'react'

function MyPost({ myPost }) {
  // console.log(myPost.img)

  const str = myPost.img

  const imagePath = str.split('/')[4]

  console.log(imagePath)

  return (
    <div key={myPost.id}>
      <label>{myPost.description}</label>
      <img
        // src="./server/public/uploads/ef32b522738f8ef05a592ab3d9ae5b64.jpeg"
        src={`/uploads/${imagePath}`}
        alt="imgnotrendering"
      />
    </div>
  )
}

export default MyPost
