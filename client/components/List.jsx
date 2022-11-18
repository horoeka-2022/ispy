import React, { useEffect } from 'react'
import { fetchMoodboard } from '../slices/moodboard'
import { useSelector, useDispatch } from 'react-redux'
import MyPost from './MyPost'

function List() {
  const dispatch = useDispatch()
  const moodboard = useSelector((state) => state.moodboard)

  useEffect(() => {
    dispatch(fetchMoodboard())
  }, [])

  // console.log(moodboard)

  return (
    <div className="app">
      {/* see where classnames were in todo fullstack for styling ref :~) */}
      <ul className="puppy-list">
        {moodboard.map((myPost) => (
          <li key={myPost.id}>
            <MyPost myPost={myPost} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
