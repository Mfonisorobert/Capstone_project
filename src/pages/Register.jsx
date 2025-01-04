import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Sign_Up from "../components/sign up/Sign_Up";
import '../App.css'

export const Register = () => {
    return (
        <>
        <main className="container2">
        <Navbar />
        <Sign_Up />        
        <Footer />
        </main>
                </>
    )
}