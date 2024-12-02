import "./Main.css";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

function Main() {
  return (
    <main className='main'>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
export default Main;
