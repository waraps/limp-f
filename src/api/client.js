import API from "./index";

const client = {
    getClients(){
        return API.get('/clients')
    },
    getClientClient(id){
        return API.get(`/client/${id}`)
    },
    createClient(product){
        return API.post('/client', product)
    },
}

export default client