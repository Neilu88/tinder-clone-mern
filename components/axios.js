import axios from "axios"

const instance = axios.create({
  baseURL: "https://heroku-tinder-server.herokuapp.com",
})

export default instance
