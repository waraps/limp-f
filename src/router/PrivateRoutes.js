import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoutes({children = <></>, ...rest}) {
    return (
        <Route 
            {...rest}
            render={
                ({location}) =>
                    localStorage.getItem('user') !== null ? (
                        children
                    ) : (
                        <Redirect 
                            to={{
                                pathname: '/login',
                                state: {from: location},
                            }}
                        />
                    )
            }
        />
    )
}
