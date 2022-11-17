import React, { useState } from 'react'

import List from './List'

function App() {
  // useEffect(() => { }, [])

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
      <p>Boilerplate</p>
      <div className="App">
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

      <h2>Looking good!</h2>
    </>
  )
}

export default App
