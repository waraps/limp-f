import API from "./index";

const client = {
    getClients(){
        return API.get('/clients')
    },
    getClientClient(id){
        return API.get(`/client/${id}`)
    },
    createClient(client){
        return API.post('/client', client)
    },
}

export default client