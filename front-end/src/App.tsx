import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SummaryAndSkills from "./components/SummaryAndSkill";
import EduAndCert from "./components/EduAndCert";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <NavBar />
      <div className="bg-gradient-to-t from-white to-slate-200 pb-10">
        <SummaryAndSkills />
        <EduAndCert />
      </div>
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
