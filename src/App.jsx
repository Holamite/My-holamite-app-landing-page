import Header from "./Navigation/Header";
import Hero from "./Hero/Hero";
import "./App.css";
import Reason from "./Why/Reason";
import Features from "./Features/Features";
import Testimonial from "./Testimonials/Testimonial";
import FindArtisan from "./Find/FindArtisan";
import FAQs from "./FAQs/FAQs";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reason />
        <FindArtisan />
        <Features />
        <Testimonial />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default App;
