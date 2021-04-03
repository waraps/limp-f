import React, {useState} from 'react'
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Dropdown({icon, name, routes}) {
    const [open, setOpen] = useState(false)

    const openDropdown = () => {
        setOpen(!open)
    }
    return (
        <div
            className={open ? 'drawer-options-list-item-active' : 'drawer-options-list-item'}
        >   
                <div
                    className='drawer-options-list-item-children-title' 
                    onClick={openDropdown}
                >
                    <div className='drawer-options-list-item-children-icon'>
                        <div>{icon} {name}</div> 
                        {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                </div>
                { 
                    <ul 
                        className={open
                                        ?   'drawer-options-list-item-children-box-visible' 
                                        :   'drawer-options-list-item-children-box'
                                    }
                    >
                        {
                             routes.map((route, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            className='drawer-options-list-item-child'
                                            to={route.path}
                                        >
                                            {route.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
        </div>
    )
}
