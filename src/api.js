import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://tgc-earphone-review-rest-api.herokuapp.com/',
    withCredentials: false,
    headers: {
      Accept: "application/json",
    }
  })
}