import React, {useState} from 'react'
import './DataTable.css'

export default function DataTable({data, tablename, columns}) {
    const [order, setOrder] = useState(false)

    const orderBy = () => {
        setOrder(!order)
    }

    return data ? (
                        <div className='table-container'> 
                            <div className='table-body'>
                                <div className='titles'>
                                    {
                                        columns && columns.map(column => {
                                            return <div 
                                                        className='column' 
                                                        key={column}
                                                    >
                                                        <span 
                                                            className='title-text'
                                                            onClick={orderBy}
                                                        >
                                                            {column} {order ? '(desc)' : '(asc)'}
                                                        </span>
                                                    </div>
                                        })
                                    }
                                </div>
                                <div className='datas'>
                                    {
                                        data && data.map(data => {
                                            return <div className='row'
                                                        key={data.id}
                                                    >
                                                        <div className='column'>{data.name}</div>
                                                        <div className='column'>{data.address}</div>
                                                        <div className='column'>{data.mail}</div>
                                                        <div className='column'>{data.phone}</div>
                                                        <div className='column'>{data.created_at}</div>
                                                    </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='table-footer'>
                                    <div className='table-lenght-data'>
                                        Mostrando {data.length > 5 ? '5' : data.length} registros de {data.length}
                                    </div>
                                    {
                                        data.length > 5 && <div className='table-pagination'>
                                                                <div className='table-footer-btn'>{'<<'}</div>
                                                                <div className='table-footer-btn'>{'<'}</div>
                                                                <div className='table-numbers'>
                                                                    1 2 3 ... {data.length}
                                                                </div>
                                                                <div className='table-footer-btn'>{'>'}</div>
                                                                <div className='table-footer-btn'>{'>>'}</div>
                                                            </div>
                                    }
                            </div>
                        </div>
                    ) 
                : 
                    (
                        <div className='table-empty'>
                            No hay {tablename ? tablename : 'datos '} que mostrar
                        </div>
                    )
}
