import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users/1/todos'

export function getRemoteTodos() {
  return axios.get(`${BASE_URL}`)
}