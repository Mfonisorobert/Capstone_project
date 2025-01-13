import "../App.css";
import Footer from "../components/home/Footer";
import SignIn from "../components/login/Sign-in";
import Navbar from "../components/home/Navbar";

export const Login = () => {
  return (
    <>
      <main className="container3">
        <Navbar />
        <SignIn />
        <Footer />
      </main>
    </>
  );
};
