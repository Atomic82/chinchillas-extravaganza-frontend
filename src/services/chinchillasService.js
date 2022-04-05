import * as tokenService from '../tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/chinchillas`

function create(chinchilla) {
return fetch(BASE_URL, {
  method: 'POST',
  headers: {
  'content-type': 'application/json',
  Authorization: `Bearer ${tokenService.getToken()}` 
},
  body: JSON.stringify(chinchilla)
})
  .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}` 
    }
  })
  .then(res => res.json())
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}` 
    },
  })
  .then(res => res.json())
}

function update(chinchilla) {
  return fetch(`${BASE_URL}/${chinchilla._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}` 
    },
    
    body: JSON.stringify(chinchilla)
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  deleteOne,
  update
} 