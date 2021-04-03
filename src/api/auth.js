import API from "./index";

const auth = {
    signIn(credentials){
        return API.post('/login', credentials)
    },
}

export default auth