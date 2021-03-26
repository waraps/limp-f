import API from "./index";

const auth = {
    signIn(credentials){
        return API.post('/login', credentials)
    },
    refreshToken(){
        return API.get('/refresh')
    }
}

export default auth