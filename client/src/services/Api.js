import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: 'http://loacalhost:80801/'
  })
}
