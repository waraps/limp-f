import React from 'react'
import './Container.css'

import ChangePassword from '../../views/ChangePassword'
import NotFound from '../../views/NotFound'

import { Switch, Route } from 'react-router-dom';

export default function Container({routes}) {
    return (
        <section className='section-container'>
            <Switch>
                {
                    routes.map((route, index) => {
                        return (
                                route.children ? 
                                                    route.children.map((child, index) => {
                                                        return (
                                                                <Route
                                                                    key={index}
                                                                    path={child.path}
                                                                    exact={child.exact}
                                                                    children={<child.main/>}
                                                                />  
                                                        )
                                                    })
                                                :
                                                    <Route
                                                        key={index}
                                                        path={route.path}
                                                        exact={route.exact}
                                                        children={<route.main/>}
                                                    />
                        )
                    })
                }
                <Route path='/cambiar' component={ChangePassword}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        </section>
    )
}