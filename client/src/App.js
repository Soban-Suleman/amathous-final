import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FounderLoginComp from "./components/Login/FounderLoginComp";
import InvestLoginComp from "./components/Login/InvestLoginComp";
import Footer from "./components/Nav-Footer/Footer";
import Navbar from "./components/Nav-Footer/Navbar";
import AboutUs from "./components/Pages/AboutUs";
import Home from "./components/Pages/Home";
import FounderSignUpComp from "./components/SignUp/FounderSignUpComp";
import InvesSignUpComp from "./components/SignUp/InvesSignUpComp";
import ForFounderComp from "./components/ForFounder/ForFounderComp";

function App() {
  return (  
    <div className="App">
      {/* <Navbar/>  */}
      {/* <Home/>  */}
      {/* <AboutUs/>  */}
      {/* <ForFounder/>  */}
      {/* <Login/>  */}  
      {/* <FounderSignUpComp/>  */}
      {/* <InvesSignUpComp/>  */}

      {/* <Footer/>  */}
  

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route
            path="/FounderLoginComp"
            element={<FounderLoginComp />}
          ></Route>
          <Route path="/InvestLoginComp" element={<InvestLoginComp />}></Route>

          <Route
            path="/FounderSignUpComp"
            element={<FounderSignUpComp />}
          ></Route>
          <Route path="/InvesSignUpComp" element={<InvesSignUpComp />}></Route>
          <Route path="/ForFounderComp" element={<ForFounderComp/>} > </Route>

          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
