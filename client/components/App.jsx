
import React, { useState, useEffect } from 'react'
import { postMyPostThenGet } from '../slices/moodboard'
import { useDispatch } from 'react-redux'
import List from './List'
import request from 'superagent'

function App() {
  useEffect(() => { }, [])
  const dispatch = useDispatch()

  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('avatar', image.data)
    const response = await fetch('http://localhost:3000/uploadFile', {
      method: 'POST',
      body: formData,
    })
    const body = await response.json()
    const id = body.id
    await request.post('/api/v1/moodboard').send({ description, id })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
      description: '',
    }
    setImage(img)
  }

  function handleChange(event) {
    setDescription(() => event.target.value)
  }

  return (
    <>
      <div className="container">
        <div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <h1 className="title"> Add an Image!</h1>
        </div>
        <br></br><br></br>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input type="file" name="file" onChange={handleFileChange}></input>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={description}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br></br><br></br>
        <List />
        <br></br><br></br>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
