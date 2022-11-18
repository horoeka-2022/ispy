import React, { useState, useEffect } from 'react'

import List from './List'

function App() {
  useEffect(() => { }, [])

  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('avatar', image.data)
    const response = await fetch('http://localhost:3000/uploadFile', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <>
<<<<<<< HEAD
      <div className="App">
        <header><img className="logo" src="./images/Logo.png" alt="cool logo" /></header>
        <List />
        <div>
=======
      <div>
        <header><img className="logo" src="./images/Logo.png" alt="cool logo" /></header>
        <List />
        <div className="App">
>>>>>>> 70209735492e637a4d7d84669cfb2cd364f50a6f
          <h1> Add an Image!</h1>
          {image.preview && (
            <img
              src={image.preview}
              width="100"
              height="100"
              alt="imagepreview"
            />
          )}
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <input type="file" name="file" onChange={handleFileChange}></input>
            <button type="submit">Submit</button>
          </form>
          {status && <h4>{status}</h4>}
        </div>
      </div>
<<<<<<< HEAD
=======
      <h2>Looking good!</h2>
>>>>>>> 70209735492e637a4d7d84669cfb2cd364f50a6f
    </>
  )
}

export default App
