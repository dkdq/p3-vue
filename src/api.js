import axios from 'axios';

export default () => {
  // let currentUser = JSON.parse(window.localStorage.currentUser);
  return axios.create({
    baseURL: 'https://tgc-earphone-review-rest-api.herokuapp.com/',
    withCredentials: false,
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
      // Authorization: currentUser && currentUser.token
    }
  })
}