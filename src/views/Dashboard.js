// Components
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer'
import Container from '../components/Container'
import Footer from '../components/Footer'

// Styles
import '../assets/css/Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <main className='main-container'>
                <Drawer />
                <Container />
            </main>
            <Footer />
        </>
    )
}