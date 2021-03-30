import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

instance.defaults.headers['Content-Type'] = 'application/json;charset=utf8'
instance.defaults.headers['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers['Access-Control-Credentials'] = '*'
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

instance.interceptors.request.use(config => {
    const configuration = config
    const token = `Bearer ${localStorage.getItem('token')}`
    configuration.headers.Authorization = token
    return configuration
})

export default instance