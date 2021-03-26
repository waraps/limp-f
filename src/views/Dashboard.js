import { useSelector } from "react-redux";

// Components
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

import { logoutStatus } from '../redux/logoutSlice'

// Styles
import '../assets/css/Dashboard.css'

// routes
import adminRoutes from '../routes/administrator'

export default function Dashboard() {
    const { loading, error } = useSelector(logoutStatus)

    if(loading) return <Loader />

    return (
        <>
            <Navbar />
            <main className='main-container'>
                <Drawer nav={adminRoutes}/>
                <Container routes={adminRoutes}/>
            </main>
            <Footer />
        </>
    )
}