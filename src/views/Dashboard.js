// Components
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer'
import Container from '../components/Container'
import Footer from '../components/Footer'

// Styles
import '../assets/css/Dashboard.css'

// routes
import adminRoutes from '../routes/administrator'

export default function Dashboard() {
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