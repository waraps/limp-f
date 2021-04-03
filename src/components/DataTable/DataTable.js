import React, {useState, useEffect} from 'react'
import './DataTable.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'

export default function DataTable({data, tablename, columns}) {
    const [search, setSearch] = useState('')
    const [change, setChange] = useState(false)
    const [objectKey] = useState(data ? Object.keys(data[0]) : null)
    const [titles, setTitles] = useState(columns.map((column, index) => {
                                            return {
                                                id: index,
                                                title: column,
                                                order: false,
                                                name: objectKey ? objectKey[index] : ''
                                            }
                                        }))

    useEffect(() => {}, [change])

    const orderBy = (title) => {
        let aux = titles
        const titleAux = aux[title.id]
        titleAux.order = !titleAux.order

        if(titleAux.order) {
            data = sortAsc(data, title.name)
        } else {
            data = sortDsc(data, title.name)
        }
        setTitles(aux)
        setChange(!change)
    }

    const sortAsc = (a, name) => {
        let swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i][name] < a[i+1][name]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }

    const sortDsc = (a, name) => {
        let swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i][name] > a[i+1][name]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }

    const searching = e => {
        setSearch(e.target.value)
        console.log(e.target.value)
        let result = []
        
        if(e.target.value === '') {
            result = data
            console.log(result)
        } else {
            result = data.filter(searchData => searchData.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > - 1);
            console.log(result)
        }
    }

    return data ? (
                        <div className='table-container'> 
                            <div className='table-body'>
                                <div>busqueda <input value={search} onChange={searching}/></div>
                                <div className='titles'>
                                    {
                                        titles && titles.map(title => {
                                            return <div 
                                                        className='column' 
                                                        key={title.id}
                                                    >
                                                        <span
                                                            key={`${title.id}-title`} 
                                                            className='title-text'
                                                            onClick={() => orderBy(title)}
                                                        >
                                                            {title.title} {title.order ? <FontAwesomeIcon icon={faSortAlphaDown} /> : <FontAwesomeIcon icon={faSortAlphaUp} />}
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
                                                        {
                                                            Object.values(data).map(property => {
                                                                return (
                                                                    <div 
                                                                        className='column' 
                                                                        key={`${property}-${data.id}`}
                                                                    >
                                                                        {property}
                                                                    </div>
                                                                )
                                                            })
                                                        }
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
