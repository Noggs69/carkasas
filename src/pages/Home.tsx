import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <>
      <ImageSlider />
      <Hero />
      <main>
        <Testimonials />
        <Benefits />
        <FinalCTA />
      </main>
    </>
  )
}

export default Home
