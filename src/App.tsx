import AboutUs from "./components/AboutUs"
import Companies from "./components/Companies"
import Deals from "./components/Deals"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Companies />
      <Deals />
      <AboutUs />
      <Products />
      <Testimonials />
    </main>
    <Footer />
    </>
  )
}

export default App