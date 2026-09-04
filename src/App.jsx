import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutHighlight from './components/AboutHighlight.jsx'
import FeaturedTreatments from './components/FeaturedTreatments.jsx'
import WhyAlder from './components/WhyAlder.jsx'
import Stats from './components/Stats.jsx'
import CTABanner from './components/CTABanner.jsx'
import Gallery from './components/Gallery.jsx'
import Blog from './components/Blog.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutHighlight />
      <FeaturedTreatments />
      <WhyAlder />
      <Stats />
      <CTABanner />
      <Gallery />
      <Blog />
      <FAQ />
      <Footer />
    </>
  )
}
