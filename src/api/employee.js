import API from "./index";

const employee = {
    getEmployees(){
        return API.get('/employees')
    },
    getEmployee(id){
        return API.get(`/employee/${id}`)
    },
    createEmployee(employee){
        return API.post('/employee', employee)
    },
}

export default employee