import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { employeeData, getEmployees } from '../../redux/slices/employeeSlice';

// components
import Loader from '../../components/Loader/Loader'
import DataTable from '../../components/DataTable/DataTable'

export default function Employees() {
    const dispatch = useDispatch()
    const { loading, error, employees } = useSelector(employeeData)

    const columns = [
        'ID',
        'Nombre',
        'Apellido',
        'Correo',
        'Telefono',
        'Cedula',
        'Registrado'
    ]

    const data = !employees ? null : employees.map(employee => {
        return {
            id: employee.id,
            name: employee.name,
            lastname: employee.lastname,
            mail: employee.mail,
            phone: employee.phone,
            dni: employee.dni,
            created_at: employee.created_at
        }
    })

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    return loading ? 
                        <Loader /> 
                    : 
                        <>
                            <h1>Empleados</h1>
                            <br />
                            <DataTable
                                tablename='Productos'
                                data={data}
                                columns={columns} 
                            />
                            {error && <div>{error}</div>}
                        </>
}