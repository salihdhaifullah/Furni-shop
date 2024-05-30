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
      <main className="flex flex-col gap-40">
        <div className="flex flex-col mb-14">
          <Hero />
          <Companies />
        </div>
        <div className="flex flex-col gap-40 xl:px-28 lg:px-12 mb-40">
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