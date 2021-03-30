import { useSelector } from "react-redux";

// Components
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

import { logoutStatus } from '../redux/slices/logoutSlice'

// Styles
import '../assets/css/Dashboard.css'

// routes
import superAdminRoutes from '../router/routes/superAdministrator'
import adminRoutes from '../router/routes/administrator'

export default function Dashboard() {
    const { loading } = useSelector(logoutStatus)
    const user = JSON.parse(localStorage.getItem('user'))

    let routes = null
    switch (user.rol_id) {
        case 1:
            routes = superAdminRoutes
            break;

        case 2:
            routes = adminRoutes
            break;
        
        case 3:
            routes = adminRoutes
            break;
    
        default:
            routes = null
            break;
    }

    if(loading) return <Loader />

    return (
        <>
            <Navbar />
            <main className='main-container'>
                <Drawer nav={routes}/>
                <Container routes={routes}/>
            </main>
            <Footer />
        </>
    )
}