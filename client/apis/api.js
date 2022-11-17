import request from 'superagent'

const url = 'api/v1/moodboard'

export function getMoodboard() {
  return request.get(url).then((res) => res.body)
}

export function addMoodboard(myPost) {
  return request.post(url).send(myPost)
}
