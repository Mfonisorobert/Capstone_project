import "../App.css";
import Tracker from "../components/health-tracker/Tracker";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

export const HealthTracker = () => {
  return (
    <>
      <main>
        <Navbar />
        <Tracker />
        <Footer />
      </main>
    </>
  );
};
