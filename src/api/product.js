import API from "./index";

const product = {
    getProducts(){
        return API.get('/products')
    },
    getDetailProduct(id){
        return API.get(`/product/${id}`)
    },
    createProduct(product){
        return API.post('/product', product)
    },
}

export default product