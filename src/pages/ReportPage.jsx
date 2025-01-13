import "../App.css";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import ReportList from "../components/report-list/Report-List";

export const ReportPage = () => {
  return (
    <>
      <main className="">
        <Navbar />
        <ReportList />
        <Footer />
      </main>
    </>
  );
};
