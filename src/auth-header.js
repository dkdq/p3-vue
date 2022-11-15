export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('currentUser'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}