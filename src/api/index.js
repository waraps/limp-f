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

instance.interceptors.response.use((response) => {
        return response
    }, async function (error) {
        const originalRequest = error.config;
 
        if (error.response.status === 401 && originalRequest.url === `${process.env.REACT_APP_BASE_URL}/refresh`) {
                window.location.replace('/login')
                localStorage.clear()
                return Promise.reject(error);
        }
    
        if (error.response.status === 401 && !originalRequest._retry) {
        
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh');
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/refresh`, {}, {
                headers: {
                  Authorization: 'Bearer ' + refreshToken
                }
               })
            if (response.status === 200) {
                localStorage.setItem('token', response.data.access_token);
                instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                return axios(originalRequest);
            }
        }
        return Promise.reject(error);
 });
 
 export default instance