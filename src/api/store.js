import API from "./index";

const store = {
    getStores(){
        return API.get('/stores')
    },
    getDetailStore(id){
        return API.get(`/store/${id}`)
    },
    createStore(store){
        return API.post('/store', store)
    },
}

export default store