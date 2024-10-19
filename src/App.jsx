import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Booking from "./pages/BookingPage";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import HospitalMap from "./pages/Hospitalmap";
import HospitalDetails from "./pages/HospitaDetails";
import Donation from "./pages/Donation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="flex-grow">
        {" "}
        {/* Main content that grows to fill the space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Hospitalmap" element={<HospitalMap />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </main>
      <Footer />
      <div className="rounded-full fixed z-50 bottom-0 right-0 bg-white">
        <a href="#top">
          <ArrowDropUpIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default App;
