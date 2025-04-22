import Header from "./components/Header"
import MainHero from "./components/MainHero"
import AdoptionSection from "./components/Adoption"
import AboutSection from "./components/About"
import TeamSection from "./components/TeamSection"
import TestimonialsSection from "./components/Testimonial"
import HelpSection from "./components/HelpSection"
import GallerySection from "./components/Gallery"
import Contact from "./components/Contact"
import StatsSection from "./components/Stats"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <MainHero />
      <AdoptionSection />
      <AboutSection />
      <HelpSection />
      {/* <TeamSection /> */}
      <TestimonialsSection />
      
      <GallerySection />
     
      <Contact/>
      <StatsSection/>
      <Footer/>
    </main>
  )
}

export default App
