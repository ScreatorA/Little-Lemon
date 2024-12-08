import "./App.css";
import "./components/Main/Main.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/Main/About";
import Highlights from "./components/Main/Highlights";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Highlights />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/orderOnline' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
