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
    <div className="relative overflow-hidden bg-white">
      <Header />
      <main className="flex flex-col lg:gap-16 md:gap-8 gap-4 lg:mb-28 md:mb-20 sm:mb-12">
        <div className="flex flex-col">
          <Hero />
          <Companies />
        </div>
        <div className="flex flex-col lg:gap-32 md:gap-28 gap-20 px-8 sm:px-12 md:px-20 lg:px-28">
          <Deals />
          <AboutUs />
          <Products />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
