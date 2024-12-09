import "./App.css";
import "./components/Main/Main.css";
import "./components/Main/About.css";
import "./components/Main/Hero.css";
import "./components/Main/Highlights.css";
import "./components/Main/Testimonials.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/Main/About";
import Highlights from "./components/Main/Highlights";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Highlights />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/orderOnline' element={<OrderOnline />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
