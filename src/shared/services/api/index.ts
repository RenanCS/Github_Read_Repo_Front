import Axios from  'axios-observable';

const api = Axios.create({
  baseURL : process.env.REACT_APP_BACKEND,
})

export default api;