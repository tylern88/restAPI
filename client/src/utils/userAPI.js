import axios from 'axios';

export const createUser = (user, cb) => {
  console.log(user)
  axios.post('/apiUser/signup', user)
    .then(response => {
      // call the response back to the signup function
      cb(response)
      console.log('user added')

    })
    .catch(err => {console.log('error adding user')})
}